import anime from "animejs";

export function animate(element) {
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

  const borderWidthX = 1;
  const borderWidthY = 1;

  // Set width and height of the animation frame
  animationFrameOutsideTop.style.width = `${outside.offsetWidth + 2}px`;
  animationFrameOutsideTop.style.height = `${outside.offsetHeight}px`;
  animationFrameOutsideBottom.style.width = `${outside.offsetWidth}px`;
  animationFrameOutsideBottom.style.height = `${outside.offsetHeight}px`;

  // Set position of the animation frame.
  // The animation frame is positioned relative to the outside element.
  animationFrameOutsideTop.style.top = `${outside.offsetTop}px`;
  animationFrameOutsideTop.style.left = `${outside.offsetLeft + 8}px`;
  animationFrameOutsideBottom.style.top = `${outside.offsetTop + 2}px`;
  animationFrameOutsideBottom.style.left = `${outside.offsetLeft}px`;

  //  Set the margin offset of the animation frame to the outside border width.
  animationFrameOutsideTop.style.marginLeft = `-${borderWidthX}px`;
  animationFrameOutsideTop.style.marginTop = `-${borderWidthY}px`;
  animationFrameOutsideBottom.style.marginLeft = `-${borderWidthX}px`;
  animationFrameOutsideBottom.style.marginTop = `${borderWidthY}px`;

  // Define the inside borders animation.
  const inside = element.querySelector("#inside");
  const animationFrameInsideTop = element.querySelector(
    "#animation-inside-top"
  );
  const animationFrameInsideBottom = element.querySelector(
    "#animation-inside-bottom"
  );

  // Set width and height of the animation frame
  animationFrameInsideTop.style.width = `${inside.offsetWidth}px`;
  animationFrameInsideTop.style.height = `${inside.offsetHeight - 1}px`;
  animationFrameInsideBottom.style.width = `${inside.offsetWidth}px`;
  animationFrameInsideBottom.style.height = `${inside.offsetHeight + 2}px`;

  // Set position of the animation frame.
  // The animation frame is positioned relative to the inside element.
  animationFrameInsideTop.style.top = `${inside.offsetTop}px`;
  animationFrameInsideTop.style.left = `${inside.offsetLeft + 12}px`;
  animationFrameInsideBottom.style.top = `${inside.offsetTop - 2}px`;
  animationFrameInsideBottom.style.left = `${inside.offsetLeft}px`;

  // Set the margin offset of the animation frame to the inside border width.
  animationFrameInsideTop.style.marginLeft = `-${borderWidthX}px`;
  animationFrameInsideTop.style.marginTop = `-${borderWidthY}px`;
  animationFrameInsideBottom.style.marginLeft = `-${borderWidthX * 2}px`;
  animationFrameInsideBottom.style.marginTop = `${borderWidthY}px`;

  const tl = anime.timeline({ easing: "easeInOutSine" });

  tl.add({
    targets: animationFrameOutsideTop,
    keyframes: [
      { height: 10, duration: 500 },
      {
        width: 8,
        marginLeft: -borderWidthX,
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
    delay: 100,
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
          height: 10,
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
