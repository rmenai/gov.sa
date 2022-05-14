import anime from "animejs";

export function animate(element, delay) {
  const tl = anime.timeline({
    easing: "easeInOutQuart",
  });
  tl.add({
    targets: element,
    keyframes: [
      { scale: 0.25, duration: 50 },
      { opacity: 1, duration: 50 },
      { scale: 1, duration: 400 },
    ],
    easing: "easeInOutSine",
    delay: 2200 + delay,
  });

  // Get child of element.
  const child = element.firstChild;

  tl.add({
    targets: child,
    opacity: 1,
    duration: 250,
  });
}
