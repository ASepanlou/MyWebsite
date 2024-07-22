import { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [isTopButtonVisible, setTopButtonVisibility] = useState(false);
  return (
    <div>
      <div id='navbar'>
        <span style={{fontSize: "50px"}} className='material-symbols-outlined'>eyeglasses</span>
        <a href='#about'>About me</a>
        <a href='#skills'>Skills</a>
        <a href='#experience'>Experience</a>
        <a href='#education'>Education</a>
        <a href='#contact'>Contact</a>
        <button id="menu-button" className='material-symbols-outlined' onClick={() => setSidebarVisibility(true)}>menu</button>
      </div>
      <div id='sidebar' style={{display: isSidebarVisible ? "flex" : "none"}}>
        <button style={{alignSelf: "start", color: "black"}} id="close-button" className='material-symbols-outlined' onClick={() => setSidebarVisibility(false)}>close</button>
        <a href='#about'>About me</a>
        <a href='#skills'>Skills</a>
        <a href='#experience'>Experience</a>
        <a href='#education'>Education</a>
        <a href='#contact'>Contact</a>
      </div>
      <div id='top'></div>
      <a id="top-button" href='#top' className='material-symbols-outlined' style={{display: isTopButtonVisible ? "inline" : "none"}}>arrow_upward</a>
    </div>
  );
}

export default App;
