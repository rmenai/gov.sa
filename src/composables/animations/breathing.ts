import anime from "animejs";

export function animate(element) {
  anime({
    targets: element,
    opacity: 0.25,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 3000,
    delay: 2000,
    loop: true,
  });
}
