let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector(".new-btn");
let winnerBox = document.querySelector(".winner");
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const gameDraw = () => {
  disableBox();
  winnerBox.innerText = "game Draw";
  winnerBox.classList.remove("hide");
  // newGame.classList.remove("hide");
};
const disableBox = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};
const enableBox = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  winnerBox.classList.remove("hide");
  // newGame.classList.remove("hide");
  winnerBox.innerText = `The winner is ${winner}`;
};
const checkWinner = () => {
  for (const pattern of winPatterns) {
    if (
      boxes[pattern[0]].innerText !== "" &&
      boxes[pattern[1]].innerText !== "" &&
      boxes[pattern[2]].innerText !== "" &&
      boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[1]].innerText === boxes[pattern[2]].innerText
    ) {
      showWinner(boxes[pattern[0]].innerText);
      disableBox();
      return true;
    }
  }
  return false;
};
let turnO = true;
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.disabled = true;
    } else {
      box.innerText = "X";
      turnO = true;
      box.disabled = true;
    }
    let isWinner = checkWinner();
    if (isWinner) {
      console.log("function Run");
    }
    count++;
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});
const resetgame = () => {
  turnO = true;
  count = 0;
  enableBox();
  winnerBox.classList.add("hide");
};
newGame.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
