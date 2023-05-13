import barba from "@barba/core";

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        console.log("Leave");
      },
      enter(data) {
        console.log("Enter");
      },
    },
  ],
});
