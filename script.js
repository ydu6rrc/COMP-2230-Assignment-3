let currentState = "beginning";

function renderQuestion() {
  let textQuestion = document.getElementById("text");
  let buttonAnswer = document.getElementById("option-buttons");
  buttonAnswer.innerHTML = "";

  if (currentState === "beginning") {
    textQuestion.textContent =
      "Choose Claire, Leon, or Ada to start your adventure.";

    let claireButton = document.createElement("button");
    claireButton.textContent = "Claire";
    claireButton.classList.add("btn");
    claireButton.addEventListener("click", function () {
      currentState = "ClaireStep1";
      renderQuestion();
    });
    buttonAnswer.appendChild(claireButton);

    let leonButton = document.createElement("button");
    leonButton.textContent = "Leon";
    leonButton.classList.add("btn");
    leonButton.addEventListener("click", function () {
      currentState = "LeonStep1";
      renderQuestion();
    });
    buttonAnswer.appendChild(leonButton);

    let adaButton = document.createElement("button");
    adaButton.textContent = "Ada";
    adaButton.classList.add("btn");
    adaButton.addEventListener("click", function () {
      currentState = "AdaStep1";
      renderQuestion();
    });
    buttonAnswer.appendChild(adaButton);
  }

  // Claire
  else if (currentState === "ClaireStep1") {
    textQuestion.textContent =
      "Claire enters the RPD. Run through the main hall or go upstairs?";

    let runThroughMainHallButton = document.createElement("button");
    runThroughMainHallButton.textContent = "Run through main hall";
    runThroughMainHallButton.classList.add("btn");
    runThroughMainHallButton.addEventListener("click", function () {
      currentState = "ClaireFail1";
      renderQuestion();
    });
    buttonAnswer.appendChild(runThroughMainHallButton);

    let goUpstairsButton = document.createElement("button");
    goUpstairsButton.textContent = "Go upstairs";
    goUpstairsButton.classList.add("btn");
    goUpstairsButton.addEventListener("click", function () {
      currentState = "ClaireStep2";
      renderQuestion();
    });
    buttonAnswer.appendChild(goUpstairsButton);
  } else if (currentState === "ClaireFail1") {
    textQuestion.textContent = "You are overwhelmed by zombies. Game Over!";

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", function () {
      currentState = "beginning";
      renderQuestion();
    });
    buttonAnswer.appendChild(restartButton);
  } else if (currentState === "ClaireStep2") {
    textQuestion.textContent =
      "Claire is upstairs. Climb the window or search the office?";

    let climbWindowButton = document.createElement("button");
    climbWindowButton.textContent = "Climb window";
    climbWindowButton.classList.add("btn");
    climbWindowButton.addEventListener("click", function () {
      currentState = "ClaireFail2";
      renderQuestion();
    });
    buttonAnswer.appendChild(climbWindowButton);

    let searchOfficeButton = document.createElement("button");
    searchOfficeButton.textContent = "Search office";
    searchOfficeButton.classList.add("btn");
    searchOfficeButton.addEventListener("click", function () {
      currentState = "ClaireWin";
      renderQuestion();
    });
    buttonAnswer.appendChild(searchOfficeButton);
  } else if (currentState === "ClaireFail2") {
    textQuestion.textContent = "You fall and are surrounded. Game Over!";

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", function () {
      currentState = "beginning";
      renderQuestion();
    });
    buttonAnswer.appendChild(restartButton);
  } else if (currentState === "ClaireWin") {
    textQuestion.textContent = "You found supplies and survived!!!!!";

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", function () {
      currentState = "beginning";
      renderQuestion();
    });
    buttonAnswer.appendChild(restartButton);
  }

  // leon
  else if (currentState === "LeonStep1") {
    textQuestion.textContent =
      "Leon arrives at the station. Go to parking garage or search weapons locker?";

    let parkingGarageButton = document.createElement("button");
    parkingGarageButton.textContent = "Parking garage";
    parkingGarageButton.classList.add("btn");
    parkingGarageButton.addEventListener("click", function () {
      currentState = "LeonFail1";
      renderQuestion();
    });
    buttonAnswer.appendChild(parkingGarageButton);

    let weaponsLockerButton = document.createElement("button");
    weaponsLockerButton.textContent = "Weapons locker";
    weaponsLockerButton.classList.add("btn");
    weaponsLockerButton.addEventListener("click", function () {
      currentState = "LeonStep2";
      renderQuestion();
    });
    buttonAnswer.appendChild(weaponsLockerButton);
  } else if (currentState === "LeonFail1") {
    textQuestion.textContent = "You are surrounded by zombies. Game Over!";

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", function () {
      currentState = "beginning";
      renderQuestion();
    });
    buttonAnswer.appendChild(restartButton);
  } else if (currentState === "LeonStep2") {
    textQuestion.textContent =
      "You find a handgun. Fight the hallway or use emergency exit?";

    let fightHallwayButton = document.createElement("button");
    fightHallwayButton.textContent = "Fight hallway";
    fightHallwayButton.classList.add("btn");
    fightHallwayButton.addEventListener("click", function () {
      currentState = "LeonFail2";
      renderQuestion();
    });
    buttonAnswer.appendChild(fightHallwayButton);

    let emergencyExitButton = document.createElement("button");
    emergencyExitButton.textContent = "Emergency exit";
    emergencyExitButton.classList.add("btn");
    emergencyExitButton.addEventListener("click", function () {
      currentState = "LeonWin";
      renderQuestion();
    });
    buttonAnswer.appendChild(emergencyExitButton);
  } else if (currentState === "LeonFail2") {
    textQuestion.textContent = "Too many enemies. Game Over!";

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", function () {
      currentState = "beginning";
      renderQuestion();
    });
    buttonAnswer.appendChild(restartButton);
  } else if (currentState === "LeonWin") {
    textQuestion.textContent = "You used an emergency exit and escaped!!!!";

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", function () {
      currentState = "beginning";
      renderQuestion();
    });
    buttonAnswer.appendChild(restartButton);
  }

  // ada
  else if (currentState === "AdaStep1") {
    textQuestion.textContent =
      "Ada sneaks in. Investigate library fire escape or follow underground passage?";

    let libraryFireEscapeButton = document.createElement("button");
    libraryFireEscapeButton.textContent = "Library fire escape";
    libraryFireEscapeButton.classList.add("btn");
    libraryFireEscapeButton.addEventListener("click", function () {
      currentState = "AdaFail1";
      renderQuestion();
    });
    buttonAnswer.appendChild(libraryFireEscapeButton);

    let undergroundPassageButton = document.createElement("button");
    undergroundPassageButton.textContent = "Underground passage";
    undergroundPassageButton.classList.add("btn");
    undergroundPassageButton.addEventListener("click", function () {
      currentState = "AdaStep2";
      renderQuestion();
    });
    buttonAnswer.appendChild(undergroundPassageButton);
  } else if (currentState === "AdaFail1") {
    textQuestion.textContent = "A horde bursts in. Game Over!";

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", function () {
      currentState = "beginning";
      renderQuestion();
    });
    buttonAnswer.appendChild(restartButton);
  } else if (currentState === "AdaStep2") {
    textQuestion.textContent =
      "You advance deeper. Light a torch or sneak quietly?";

    let lightTorchButton = document.createElement("button");
    lightTorchButton.textContent = "Light a torch";
    lightTorchButton.classList.add("btn");
    lightTorchButton.addEventListener("click", function () {
      currentState = "AdaFail2";
      renderQuestion();
    });
    buttonAnswer.appendChild(lightTorchButton);

    let sneakQuietlyButton = document.createElement("button");
    sneakQuietlyButton.textContent = "Sneak quietly";
    sneakQuietlyButton.classList.add("btn");
    sneakQuietlyButton.addEventListener("click", function () {
      currentState = "AdaWin";
      renderQuestion();
    });
    buttonAnswer.appendChild(sneakQuietlyButton);
  } else if (currentState === "AdaFail2") {
    textQuestion.textContent = "The torch attracts zombies. Game Over!";

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", function () {
      currentState = "beginning";
      renderQuestion();
    });
    buttonAnswer.appendChild(restartButton);
  } else if (currentState === "AdaWin") {
    textQuestion.textContent = "You discovered Umbrella's lab and survived!!";

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", function () {
      currentState = "beginning";
      renderQuestion();
    });
    buttonAnswer.appendChild(restartButton);
  }
}

renderQuestion();
