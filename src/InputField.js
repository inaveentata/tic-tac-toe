import checkTextContent from "./checkTextContent";
const id = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const InputField = () => {
  function handleClick(e) {
    const el = e.target;
    el.textContent = "O";
    checkTextContent(+e.target.dataset.id)
  }

  return (
    <section>
      {id.map((item) => (
        <div key={item} className="tic" onClick={handleClick} data-id={item}></div>
      ))}
    </section>
  );
};

export default InputField;
