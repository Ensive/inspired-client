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
          <span className="MenuText Text Text--regular">Одежда</span>
        </a>
        <a className="MenuLink" href="#">
          <span className="MenuText Text Text--regular">Платья</span>
        </a>
        <a className="MenuLink" href="#">
          <span className="MenuText Text Text--regular Text--primary">Sale</span>
        </a>
        <a className="MenuLink" href="#">
          <span className="MenuText Text Text--regular">О Нас</span>
        </a>
        <a className="MenuLink" href="#">
          <span className="MenuText Text Text--regular">Блог</span>
        </a>
      </nav>
    </div>
  );
}

export default Menu;
