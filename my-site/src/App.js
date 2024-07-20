import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='navbar'>
        <span style={{fontSize: "50px"}} className='material-symbols-outlined'>eyeglasses</span>
        <a href='#skills'>Skills</a>
        <a href='#about'>About</a>
        <button id="menu-button" className='material-symbols-outlined'>menu</button>
      </div>
      <div id='top'></div>
      <a id="top-button" href='#top' className='material-symbols-outlined'>arrow_upward</a>
    </div>
  );
}

export default App;
