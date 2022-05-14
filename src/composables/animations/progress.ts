import anime from "animejs";

export function animate(object) {
  anime({
    targets: object,
    progress: [
      { value: 99, duration: 19000 },
      { value: 100, duration: 10 },
    ],
    easing: "easeInOutQuart",
    round: 1,
  });
}
