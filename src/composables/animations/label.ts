import anime from "animejs";

export function animate(element, steps) {
  const tl = anime.timeline({
    easing: "easeInOutQuart",
  });
  tl.add({
    targets: element,
    keyframes: [
      { translateY: steps, duration: 50 },
      { opacity: 1, scale: 0.5, duration: 50 },
      { translateY: 0, scale: 1, duration: 400 },
    ],
    easing: "easeInOutSine",
    delay: 1800,
  });

  // Get child of element.
  const child = element.firstChild;

  tl.add({
    targets: child,
    opacity: 1,
    duration: 100,
  });
}
