import findWinner from "./findWinner";
import freeCell from "./freeCell";
function checkTextContent(id) {
  const allText = Array.from(document.getElementsByClassName("tic"));
  const check = allText
    .map((item) => item.textContent === "")
    .filter((item) => item === true);
  if (check.length !== 0) {
    const newIndex = freeCell(id, allText);
    allText[newIndex].textContent = "X";
  }
  findWinner(allText, check.length);
}
 
export default checkTextContent;
