AFRAME.registerComponent("boxes", {
  schema: {
    height: { type: "number", default: 3 },
    width: { type: "number", default: 3 },
    depth: { type: "number", default: 3 },
  },
  init: function () {
    for (var i = 0; i < 20; i++) {
      var box = document.createElement("a-entity");
      box.setAttribute("id", "box" + i); 

      posX = Math.random()*200 -100;
      posY = 1.5;
      posZ =Math.random()*200 -100;

      position = { x: posX, y: posY, z: posZ };           
      box.setAttribute("position", position);

      box.setAttribute("geometry", {
        primitive: "box",
        height: this.data.height,
        width: this.data.width,
        depth: this.data.depth,
      });

      box.setAttribute("material", {
        color:'yellow',
        repeat: "1 1 1",
      });

      box.setAttribute("static-body", {});
      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }
  },
});