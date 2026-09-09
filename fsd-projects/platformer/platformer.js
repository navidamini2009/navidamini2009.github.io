$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(80, 650, 170, 20, "red"); // Start
    createPlatform(300, 580, 120, 20, "black");
    createPlatform(500, 460, 120, 20, "black");
    createPlatform(680, 390, 140, 20, "black");
    createPlatform(850, 290, 130, 20, "black");
    createPlatform(1060, 390, 100, 20, "black");
    createPlatform(1100, 100, 20, 200, "black");
    createPlatform(1250, 290, 120, 20, "lime"); // Finish

    createPlatform(90, 500, 100, 20, "black");
    createPlatform(120, 350, 100, 20, "black");
    createPlatform(170, 230, 120, 20, "black");
    createPlatform(300, 120, 130, 20, "black"); // diamond route
    createPlatform(470, 250, 110, 20, "black");
    createPlatform(620, 180, 100, 20, "black");
    createPlatform(760, 120, 110, 20, "black");
    createPlatform(900, 180, 100, 20, "black");
    createPlatform(990, 60, 90, 20, "black");
    createPlatform(1140, 60, 100, 20, "black");
    createPlatform(1280, 120, 100, 20, "black"); // steve route

    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("database", 720, 330, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("top", 400, 1800);
    createCannon("right", 300, 2200);
    createCannon("left", 420, 2600);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
