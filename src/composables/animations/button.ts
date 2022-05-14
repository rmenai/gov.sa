import anime from "animejs";

export function animate(element) {
  anime({
    targets: element,
    backgroundColor: ["#FFF", "#000"],
    color: ["#000", "#67e8f9"],
    easing: "easeInOutExpo",
    duration: 400,
  });
}
