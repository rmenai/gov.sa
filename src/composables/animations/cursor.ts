import anime from "animejs";

export function animate(element) {
  return anime({
    targets: element,
    opacity: 0,
    duration: 10,
    delay: 300,
    endDelay: 300,
    direction: "alternate",
    loop: true,
  });
}
