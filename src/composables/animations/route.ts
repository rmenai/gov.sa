import anime from "animejs";

export function animate(element) {
  const logo = element.querySelector("#loading");
  const content = element.querySelector("#content");

  const tl = anime.timeline({ easing: "easeInOutSine" });

  tl.add({
    targets: logo,
    opacity: [
      { value: 0, duration: 0 },
      { value: 1, duration: 750 },
      { value: 0, duration: 750 },
    ],
    easing: "easeInOutSine",
    complete: () => {
      // Delete the logo.
      logo.remove();

      // Make content display block.
      content.style.display = "block";
    },
  });

  tl.add({
    targets: content,
    opacity: 1,
    duration: 100,
  });
}
