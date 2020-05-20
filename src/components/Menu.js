import React, {Fragment} from 'react';

import './Menu.scss';

const Menu = () => {
  return (
    <Fragment>
      <a id="home" className="menu-item">home</a>
      <a id="about" className="menu-item">about</a>
      <div id="social" className="menu-item">
        <a href="https://behence.com" id="behence" className="menu-subitem">behence</a>
        <a href="https://instagram.com" id="instagram" className="menu-subitem">instagram</a>
      </div>
      <a id="works" className="menu-item">works</a>
    </Fragment>
  );
};

Menu.propTypes = {};

export default Menu;