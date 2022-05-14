import anime from "animejs";

export function emulateCommand(keys: string[]) {
  return anime({
    easing: "linear",
    duration: anime.random(50, 75),
    loop: keys.length,
    loopBegin: function () {
      const keyCode = keys.shift();
      const event = new KeyboardEvent("keydown", {
        key: keyCode,
        code: "allow",
      });
      window.dispatchEvent(event);
    },
    begin: function () {
      const event = new KeyboardEvent("keydown", {
        key: "Escape",
        code: "allow",
      });
      window.dispatchEvent(event);
    },
    complete: function () {
      const event = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "allow",
      });
      window.dispatchEvent(event);
    },
  });
}
