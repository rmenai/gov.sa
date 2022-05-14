import anime from "animejs";

export function animateExit() {
  return anime({
    targets: "#home",
    opacity: 0,
    duration: 200,
    easing: "easeInOutSine",
  });
}
