// det the game name
let gameName = "Guess The Word Game";
document.title = gameName;
let checkBtn = document.querySelector(".check-word");
let gessWord;
let clearBtn;
// set game area
let currentTray = 1;
let numbersletters = 6;
let numbersOfTray = 6;
let rightGess = true;
// mange wordes
let wordes = ["Create", "Update", "Delete", "Mostaf", "Circle", "Family"];

gessWord = wordes[Math.floor(Math.random() * wordes.length)];
console.log(gessWord);
let wordPicIndex = wordes.indexOf(gessWord);

let pics = [
  "../imgs/create.jpg",
  "../imgs/update.png",
  "../imgs/delete.png",
  "../imgs/mostaf.jpg",
  "../imgs/circle.png",
  "../imgs/family.jpeg",
];

let pictureDiv = document.querySelector(".picture");
pictureDiv.style.backgroundImage = ` URl(${pics[wordPicIndex]})`;
wordes.splice(wordPicIndex, 1);
pics.splice(wordPicIndex, 1);

//pics

// array of resultes
let resaults = 1;
window.onload = function () {
  setGameArea();
};
function setGameArea() {
  let gameInputs = document.querySelector(".words-inputs");
  for (let i = 1; i <= numbersOfTray; i++) {
    let trayesDiv = document.createElement("div");
    trayesDiv.className = `tray -${i}`;
    trayesDiv.id = `tray-${i}`;
    trayesDiv.innerHTML = `<span> Tray ${i} </span>`;
    gameInputs.appendChild(trayesDiv);
    if (i != 1) trayesDiv.classList.add("disable");
    for (let j = 1; j <= numbersletters; j++) {
      let leter = document.createElement("input");
      leter.className = `leter -${j}`;
      leter.id = `leter-${j}`;
      leter.setAttribute("maxlength", 1);
      trayesDiv.appendChild(leter);
    }

    let allInputs = document.querySelectorAll(`#tray-${i} .leter`);

    allInputs.forEach((input, index) => {
      let nextInput = allInputs[index + 1];
      let previosInput = allInputs[index - 1];

      input.addEventListener("input", () => {
        if (!clearBtn) {
          showClearBtn(); // إظهار الزر عند إدخال الحرف الأول
        }
        if (nextInput) nextInput.focus();
        input.value = input.value.toUpperCase();
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
          if (nextInput) nextInput.focus();
        }
        if (event.key === "ArrowLeft") {
          if (previosInput) previosInput.focus();
        }
        if (event.key === "Backspace") {
          this.value = "";
          if (previosInput) {
            previosInput.value = "";
            previosInput.focus();
          }
        }
        input.addEventListener("dblclick", () => {
          input.value = "";
        });
      });
    });
  }
  gameInputs.children[0].children[1].focus();

  let disableInputs = document.querySelectorAll(".disable input");
  disableInputs.forEach((e) => (e.disabled = true));
}
checkBtn.addEventListener("click", () => {
  check();
});
function check() {
  for (let i = 1; i <= numbersletters; i++) {
    let inputleter = document.querySelector(`#tray-${currentTray} #leter-${i}`);
    let rightLeter = gessWord[i - 1];

    if (inputleter.value !== "") {
      if (rightLeter.toUpperCase() === inputleter.value) {
        inputleter.style.backgroundColor = "#b6561e";
        inputleter.style.color = "white";
        rightGess = true;
      } else if (gessWord.toUpperCase().includes(inputleter.value)) {
        inputleter.style.backgroundColor = "#ffc107";
        inputleter.style.color = "white";
        rightGess = false;
        break;
      } else {
        inputleter.style.backgroundColor = "#8d2929";
        inputleter.style.color = "white";
        rightGess = false;
        break;
      }
    } else return;
  }
  // rightGess = choose;
  console.log(rightGess);
  if (rightGess === true) {
    if (currentTray < numbersOfTray) {
      currentTray += 1;
      hideClearBtn();
      gessWord = wordes[Math.floor(Math.random() * wordes.length)];
      wordPicIndex = wordes.indexOf(gessWord);

      pictureDiv.style.backgroundImage = `none`;
      pictureDiv.style.backgroundImage = ` URl(${pics[wordPicIndex]})`;
      wordes.splice(wordPicIndex, 1);
      pics.splice(wordPicIndex, 1);
      console.log(currentTray);
      if (currentTray <= numbersOfTray) {
        document
          .querySelector(`#tray-${currentTray}`)
          .classList.remove("disable");

        document
          .querySelectorAll(`#tray-${currentTray} .leter`)
          .forEach((e) => {
            e.disabled = false;
            e.style.backgroundColor = "#ccc09063";
          });

        document.querySelector(`#tray-${currentTray} #leter-1`).focus();
      }

      resaults += 1;
      console.log(resaults);
    } else {
      let resaultsArea = document.querySelector(".content");
      pictureDiv.style.backgroundImage = `none`;
      resaultsArea.innerHTML = "";
      let resaultDiv = document.createElement("div");
      resaultDiv.innerText = "Yes We Do It";
      let resaultCount = document.createElement("span");
      resaultCount.innerText = `You Answer ${resaults} from ${numbersOfTray}`;
      resaultDiv.className = "resaultDiv";

      resaultsArea.appendChild(resaultDiv);
      resaultDiv.appendChild(resaultCount);
    }
  }
}
//clear inputs
// دالة لإظهار زر "Clear"
function showClearBtn() {
  clearBtn = document.createElement("button");
  clearBtn.className = "clearBtn";
  clearBtn.innerHTML = "Clear";
  document.querySelector(`#tray-${currentTray}`).appendChild(clearBtn);

  clearBtn.addEventListener("click", () => {
    document.querySelectorAll(`#tray-${currentTray} .leter`).forEach((e) => {
      e.value = "";
    });
  });
}

// دالة لإخفاء زر "Clear"
function hideClearBtn() {
  if (clearBtn) {
    clearBtn.remove();
    clearBtn = null;
  }
}
