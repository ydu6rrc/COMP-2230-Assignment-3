let currentState = "beginning";

function addAnswerButton(buttonText, nextState) {
  let answerButtonElement = document.createElement("button");
  let optionButtons = document.getElementById("option-buttons");
  answerButtonElement.textContent = buttonText;
  answerButtonElement.addEventListener("click", function () {
    currentState = nextState;
    renderQuestion();
  });
  optionButtons.appendChild(answerButtonElement);
}

function renderQuestion() {
  let textQuestion = document.getElementById("text");
  let buttonAnswer = document.getElementById("option-buttons");
  buttonAnswer.innerHTML = "";

  if (currentState === "beginning") {
    textQuestion.textContent =
      "Choose Claire, Leon, or Ada to start your adventure.";
    addAnswerButton("Claire", "ClaireStep1");
    addAnswerButton("Leon", "LeonStep1");
    addAnswerButton("Ada", "AdaStep1");
  }

  // Claire path
  else if (currentState === "ClaireStep1") {
    textQuestion.textContent =
      "Claire enters the RPD. Run through the main hall or go upstairs?";
    addAnswerButton("Run through main hall", "ClaireFail1");
    addAnswerButton("Go upstairs", "ClaireStep2");
  } else if (currentState === "ClaireFail1") {
    textQuestion.textContent = "You are overwhelmed by zombies. Game Over!";
    addAnswerButton("Restart", "beginning");
  } else if (currentState === "ClaireStep2") {
    textQuestion.textContent =
      "Claire is upstairs. Climb the window or search the office?";
    addAnswerButton("Climb window", "ClaireFail2");
    addAnswerButton("Search office", "ClaireWin");
  } else if (currentState === "ClaireFail2") {
    textQuestion.textContent = "You fall and are surrounded. Game Over!";
    addAnswerButton("Restart", "beginning");
  } else if (currentState === "ClaireWin") {
    textQuestion.textContent = "You found supplies and survived!!!!!";
    addAnswerButton("Restart", "beginning");
  }

  // Leon path
  else if (currentState === "LeonStep1") {
    textQuestion.textContent =
      "Leon arrives at the station. Go to parking garage or search weapons locker?";
    addAnswerButton("Parking garage", "LeonFail1");
    addAnswerButton("Weapons locker", "LeonStep2");
  } else if (currentState === "LeonFail1") {
    textQuestion.textContent = "You are surrounded by zombies. Game Over!";
    addAnswerButton("Restart", "beginning");
  } else if (currentState === "LeonStep2") {
    textQuestion.textContent =
      "You find a handgun. Fight the hallway or use emergency exit?";
    addAnswerButton("Fight hallway", "LeonFail2");
    addAnswerButton("Emergency exit", "LeonWin");
  } else if (currentState === "LeonFail2") {
    textQuestion.textContent = "Too many enemies. Game Over!";
    addAnswerButton("Restart", "beginning");
  } else if (currentState === "LeonWin") {
    textQuestion.textContent = "You used an emergency exit and escaped!!!!";
    addAnswerButton("Restart", "beginning");
  }

  // Ada path
  else if (currentState === "AdaStep1") {
    textQuestion.textContent =
      "Ada sneaks in. Investigate library fire escape or follow underground passage?";
    addAnswerButton("Library fire escape", "AdaFail1");
    addAnswerButton("Underground passage", "AdaStep2");
  } else if (currentState === "AdaFail1") {
    textQuestion.textContent = "A horde bursts in. Game Over!";
    addAnswerButton("Restart", "beginning");
  } else if (currentState === "AdaStep2") {
    textQuestion.textContent =
      "You advance deeper. Light a torch or sneak quietly?";
    addAnswerButton("Light a torch", "AdaFail2");
    addAnswerButton("Sneak quietly", "AdaWin");
  } else if (currentState === "AdaFail2") {
    textQuestion.textContent = "The torch attracts zombies. Game Over!";
    addAnswerButton("Restart", "beginning");
  } else if (currentState === "AdaWin") {
    textQuestion.textContent = "You discovered Umbrella's lab and survived!!";
    addAnswerButton("Restart", "beginning");
  }
}

renderQuestion();
