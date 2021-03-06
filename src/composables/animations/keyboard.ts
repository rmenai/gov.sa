import anime from "animejs";

export function animate(element, spacebar) {
  const tl = anime.timeline({
    easing: "easeInOutSine",
  });
  tl.add({
    targets: element,
    opacity: 1,
    duration: 1200,
    delay: 2400,
  });

  tl.add(
    {
      targets: spacebar,
      width: ["10%", "100%"],
      opacity: { value: 1, duration: 800 },
      duration: 800,
    },
    "-=1200"
  );
}
