import logo from './images/svg/scond.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <canvas id='canvas'></canvas>
    </div>
  );
}

export default App;
