import anime from "animejs";

export function animate(element) {
  anime({
    targets: element,
    opacity: 0.4,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 3000,
    delay: 3800,
    loop: true,
  });
}
