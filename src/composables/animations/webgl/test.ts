import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  BufferGeometry,
  LineBasicMaterial,
  Vector3,
  Line,
  LinePieces,
} from "three";

export function createWebGLTest(container: HTMLElement) {
  const canvas = container.querySelector("canvas");

  const renderer = new WebGLRenderer({ antialias: true, canvas });
  const cameraDistance = 100;
  const camera = new PerspectiveCamera(
    50,
    container.clientWidth / container.clientHeight,
    1,
    400
  );
  let cameraAngle = 0;
  const scene = new Scene();
  const splineGeometry = new BufferGeometry();
  const splineGeometryPoints = [];
  const splineMaterial = new LineBasicMaterial({
    color: 0x6fc0ba,
    opacity: 0,
    transparent: true,
  });

  const backdropGeometry = new BufferGeometry();
  const backdropGeometryPoints = [];
  const backdropMaterial = new LineBasicMaterial({
    color: 0x1b2f2d,
    opacity: 1,
    transparent: true,
  });

  renderer.setSize(container.clientWidth, container.clientHeight);

  camera.position.z = cameraDistance;
  camera.lookAt(scene.position);

  let lastRenderDate = new Date();

  const calc = function (x) {
    return (
      ((x + 200) *
        (x + 100) *
        (x + 280) *
        (x + 10) *
        (x - 300) *
        (x - 250) *
        (x - 150)) /
      Math.pow(10, 14) /
      1.5
    );
  };

  for (let i = 0; i < 500; i++) {
    const y =
      calc(i - 250) * Math.sin((2 * Math.PI * (i % 6)) / 6 + i / 500) +
      Math.cos(i) * 5;
    const z = calc(i - 250) * Math.cos((2 * Math.PI * (i % 6)) / 6 + i / 500);
    splineGeometryPoints.push(new Vector3(i - 250, y, z));
  }
  splineGeometry.verticesNeedUpdate = true;
  splineGeometry.setFromPoints(splineGeometryPoints);

  const splineLine = new Line(splineGeometry, splineMaterial);
  scene.add(splineLine);

  for (let i = 0; i < 25; i++) {
    backdropGeometryPoints.push(new Vector3(-500, 100 - i * 8, -100));
    backdropGeometryPoints.push(new Vector3(500, 100 - i * 8, -100));
  }

  backdropGeometry.setFromPoints(backdropGeometryPoints);
  const backdropLine = new Line(backdropGeometry, backdropMaterial, LinePieces);
  scene.add(backdropLine);

  renderer.render(scene, camera);

  let firstRun = null;
  let introAnimationDone = false;

  const animate = function animate() {
    requestAnimationFrame(animate);

    if (firstRun === null) {
      firstRun = Date.now() + 2500;
    }
    const renderTime = new Date().getTime() - lastRenderDate.getTime();
    const timeSinceStart = Date.now() - firstRun;
    lastRenderDate = new Date();

    const rotateCameraBy = (2 * Math.PI) / (10000 / renderTime);
    cameraAngle += rotateCameraBy;

    if (timeSinceStart < 3000) {
      backdropMaterial.opacity = Math.max(0, (timeSinceStart - 2000) / 3000);
      splineMaterial.opacity = timeSinceStart / 3000;
    } else if (!introAnimationDone) {
      introAnimationDone = true;
      backdropMaterial.opacity = 0.333;
      splineMaterial.opacity = 1;
    }

    camera.position.x = Math.sin(cameraAngle) * 20;
    renderer.render(scene, camera);

    splineLine.rotation.x += 0.01;
  };

  return {
    animate,
    reset: function () {
      firstRun = null;
    },
  };
}
