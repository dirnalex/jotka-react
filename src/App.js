import React, {createContext, useLayoutEffect, useState} from 'react';
import './App.scss';
import Logo from './components/Logo';
import Menu from './components/Menu';

export const MousePositionContext = createContext({});

function App() {
  const [mousePosition, setMousePosition] = useState({});

  useLayoutEffect(() => {
    const handleScroll = (e) => {
      setMousePosition({
        pageX: mousePosition.clientX + window.scrollX,
        pageY: mousePosition.clientY + window.scrollY,
        clientX: mousePosition.clientX,
        clientY: mousePosition.clientY
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleMouseMove = (e) => {
    setMousePosition({
      pageX: e.pageX,
      pageY: e.pageY,
      clientX: e.clientX,
      clientY: e.clientY
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({});
  };

  return (
    <MousePositionContext.Provider value={mousePosition}>
      <div onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} className="App">
        <Menu/>
        <Logo className="main-logo"/>
        <p className="intro-text">grafik designer, with field of work swings between web design and branding. not losing
          fun with personal projects.</p>
        <div className="photo-block">
          <img className="photo" alt="Stone face!!!" src="/img/stone-face.png"/>
          <div className="click">click<img alt="star" className="star" src="/img/star.svg"/></div>
        </div>
        <div className="projects-container">
          <h2 className="projects-header">projects</h2>
          <ul className="projects-list">
            <li>jotka.xyz</li>
            <li>ajozefow.art</li>
            <li>geparden.ne</li>
            <li>termomix</li>
          </ul>
        </div>
        <p className="contact">
          I’m always approachable for interesting work, investigations, collaboration
          and questions. Feel free to text me <a className="email" href="mailto:jotka@gmail.com">jotka@gmail.com</a><img
          className="hand-img" src="/img/hand.png"/>
        </p>
        <div className="mini-logo">
          <img src="/img/icons/1.svg"/>
          <img src="/img/icons/2.svg"/>
          <img src="/img/icons/3.svg"/>
          <img src="/img/icons/4.svg"/>
          <img src="/img/icons/5.svg"/>
          <img src="/img/icons/6.svg"/>
        </div>
        <footer className="footer">Design by Joanna Kurowska Code by Aleksei Dyrnaev</footer>
      </div>
    </MousePositionContext.Provider>
  );
}

export default App;
