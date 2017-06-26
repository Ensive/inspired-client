import React from 'react';

import './Menu.scss';

function Menu() {
  return (
    <div className="MenuWrapper">
      <nav className="Menu">
        <a className="MenuLink" href="#">
          <span className="MenuText Text Text--regular">Новинки</span>
        </a>
        <a className="MenuLink" href="#">
          <span className="MenuText Text Text--regular">Распродажа</span>
        </a>
        <a className="MenuLink" href="#">
          <span className="MenuText Text Text--regular">Платья</span>
        </a>
        <a className="MenuLink" href="#">
          <span className="MenuText Text Text--regular">Блог</span>
        </a>
        <a className="MenuLink" href="#">
          <span className="MenuText Text Text--regular">О Нас</span>
        </a>
      </nav>
    </div>
  );
}

export default Menu;
