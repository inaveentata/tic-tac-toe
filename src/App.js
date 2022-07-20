
import InputField from './InputField';
const spanId = [0, 1, 2, 3, 4, 5, 6, 7, 8];
function App() {
  return (
    <>
     <h1 className="title">Tic Tac Toe</h1>
    <main>
        <InputField />
        {
          spanId.map(id=><span key={id} className='line'></span>)
        }
        <div className="message">O Winner !</div>
        <button onClick={()=> window.location.reload()} className='play-btn'>Play Again</button>
    </main>
      <footer>
        <a href="">Github Source</a>
    </footer>
    </>
  );
}

export default App;
