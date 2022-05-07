import anime from "animejs";

export function animate(element, steps) {
  const tl = anime.timeline({
    easing: "easeInOutQuart",
  });
  tl.add({
    targets: element,
    keyframes: [
      { translateY: steps, duration: 50 },
      { opacity: 1, duration: 50 },
      { translateY: 0, duration: 400 },
    ],
    easing: "easeInOutSine",
    delay: 2200,
  });

  // Get child of element.
  const child = element.firstChild;

  tl.add({
    targets: child,
    opacity: 1,
    duration: 100,
  });
}
