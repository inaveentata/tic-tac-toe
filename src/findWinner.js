
function findWinner(values, length) {
  const message = document.querySelector(".message");
  const checkList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < checkList.length; index++) {
    const [a, b, c] = checkList[index];
    const lines = Array.from(document.getElementsByClassName("line"));
    if (
      values[a].textContent &&
      values[a].textContent === values[b].textContent &&
      values[a].textContent === values[c].textContent
    ) {
      lines[index].classList.add(`line-${index}`);
      if (values[a].textContent === "O") {
        message.classList.add("show");
      } else if (values[a].textContent === "X") {
        message.textContent = "X Winner !";
        message.classList.add("show");
      }
    }
  }
  if (length === 0 && !message.classList.contains('show')) {
    message.textContent = `It's Draw !`;
    message.classList.add("show");
  }
}

export default findWinner;
