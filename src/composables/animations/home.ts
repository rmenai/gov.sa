import anime from "animejs";

function animate(element) {
  // Make element visible.
  element.style.visibility = "visible";

  // Define the outside borders animation.
  const outside = element.querySelector("#outside");
  const animationFrameOutsideTop = element.querySelector(
    "#animation-outside-top"
  );
  const animationFrameOutsideBottom = element.querySelector(
    "#animation-outside-bottom"
  );

  // Set width and height of the animation frame
  animationFrameOutsideTop.style.width = `${outside.offsetWidth + 4}px`;
  animationFrameOutsideTop.style.height = `${outside.offsetHeight}px`;
  animationFrameOutsideBottom.style.width = `${outside.offsetWidth + 2}px`;
  animationFrameOutsideBottom.style.height = `${outside.offsetHeight}px`;

  // Set position of the animation frame.
  // The animation frame is positioned relative to the outside element.
  animationFrameOutsideTop.style.top = `${outside.offsetTop}px`;
  animationFrameOutsideTop.style.left = `${outside.offsetLeft - 4}px`;
  animationFrameOutsideBottom.style.top = `${outside.offsetTop}px`;
  animationFrameOutsideBottom.style.left = `${outside.offsetLeft}px`;

  //  Set the margin offset of the animation frame to the outside border width.
  animationFrameOutsideTop.style.marginTop = "-3px";
  animationFrameOutsideTop.style.marginLeft = "2px";
  animationFrameOutsideBottom.style.marginTop = "2px";
  animationFrameOutsideBottom.style.marginLeft = "-2px";

  // Define the inside borders animation.
  const inside = element.querySelector("#inside");
  const animationFrameInsideTop = element.querySelector(
    "#animation-inside-top"
  );
  const animationFrameInsideBottom = element.querySelector(
    "#animation-inside-bottom"
  );

  // Set width and height of the animation frame
  animationFrameInsideTop.style.width = `${inside.offsetWidth + 2}px`;
  animationFrameInsideTop.style.height = `${inside.offsetHeight}px`;
  animationFrameInsideBottom.style.width = `${inside.offsetWidth + 1}px`;
  animationFrameInsideBottom.style.height = `${inside.offsetHeight}px`;

  // Set position of the animation frame.
  // The animation frame is positioned relative to the inside element.
  animationFrameInsideTop.style.top = `${inside.offsetTop}px`;
  animationFrameInsideTop.style.left = `${inside.offsetLeft - 2}px`;
  animationFrameInsideBottom.style.top = `${inside.offsetTop}px`;
  animationFrameInsideBottom.style.left = `${inside.offsetLeft}px`;

  // Set the margin offset of the animation frame to the inside border width.
  animationFrameInsideTop.style.marginTop = "-2px";
  animationFrameInsideTop.style.marginLeft = "3.9px";
  animationFrameInsideBottom.style.marginTop = "2px";
  animationFrameInsideBottom.style.marginLeft = "-2px";

  const tl = anime.timeline({ easing: "easeInOutSine" });

  tl.add({
    targets: animationFrameOutsideTop,
    keyframes: [
      { height: 8, duration: 500 },
      {
        width: 8,
        marginLeft: -2,
        duration: 990,
      },
      {
        height: outside.offsetHeight / 2,
        duration: 10,
      },
      {
        top: outside.offsetTop + outside.offsetHeight / 2,
        height: 0,
        duration: 500,
      },
    ],
    delay: 200,
  });
  tl.add(
    {
      targets: animationFrameOutsideBottom,
      keyframes: [
        { width: 8, duration: 1000, endDelay: 500 },
        {
          height: 0,
          top: outside.offsetTop + outside.offsetHeight / 2,
          duration: 500,
        },
      ],
    },
    "-=2000"
  );
  tl.add(
    {
      targets: animationFrameInsideBottom,
      keyframes: [
        { width: 8, duration: 800 },
        { height: 0, duration: 400 },
      ],
    },
    "-=2000"
  );
  tl.add(
    {
      targets: animationFrameInsideTop,
      keyframes: [
        {
          height: 8,
          width: 0,
          left: inside.offsetLeft + inside.offsetWidth,
          duration: 800,
        },
      ],
      complete: function () {
        // Delete all animation elements.
        animationFrameOutsideTop.remove();
        animationFrameOutsideBottom.remove();
        animationFrameInsideTop.remove();
        animationFrameInsideBottom.remove();
      },
    },
    "-=800"
  );
}
export { animate };
