import { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';

function App() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [isTopButtonVisible, setTopButtonVisibility] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if(window.scrollY > 0){
        setTopButtonVisibility(true);
      }
      else{
        setTopButtonVisibility(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='main-page'>
      <div id='navbar'>
        <span style={{fontSize: "50px"}} className='material-symbols-outlined'>eyeglasses</span>
        <a href='#about'>About me</a>
        <a href='#skills'>Skills</a>
        <a href='#experience'>Experience</a>
        <a href='#education'>Education</a>
        <a href='#contact'>Contact</a>
        <button id="menu-button" className='material-symbols-outlined' onClick={() => setSidebarVisibility(true)}>menu</button>
      </div>
      <div id='sidebar' className="animate__animated animate__fadeInRight" style={{display: isSidebarVisible ? "flex" : "none"}}>
        <button style={{alignSelf: "start", color: "black"}} id="close-button" className='material-symbols-outlined' onClick={() => setSidebarVisibility(false)}>close</button>
        <a href='#about'>About me</a>
        <a href='#skills'>Skills</a>
        <a href='#experience'>Experience</a>
        <a href='#education'>Education</a>
        <a href='#contact'>Contact</a>
      </div>
      <div id='top'></div>
      <a id="top-button" href='#top' className='material-symbols-outlined' style={{display: isTopButtonVisible ? "inline" : "none"}}>arrow_upward</a>

      <div id='about' className='text-body'>Hello and welcome to my website! My name is Abtin G. Sepanlou and I am a web developer. I have a host of experience designing websites both academically and professionally, with my most notable work being part of the Edsembli Inc. ERP Suite (FIN). On this site, you can find more information about my past experiences and current skills, along with my contact information should you wish to get in touch :) </div>
    </div>
  );
}

export default App;
