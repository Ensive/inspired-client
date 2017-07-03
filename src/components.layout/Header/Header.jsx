import React from 'react';
import { string, func } from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  query: string,
  onSearch: func
};

import './Header.scss';

function Header({ query, onSearch }) {
  return (
    <div className="HeaderWrapper">
      <header className="Header u-clear">
        <form className="SearchForm" action="#">
          <button type="button" className="SearchButton Text Text--medium" />
          <input
            onChange={onSearch}
            value={query}
            className="SearchInput Text Text--regular"
            type="search"
            placeholder="Поиск..."
          />
        </form>

        <div className="HeaderLogo">
          <h1 className="HeaderTitle">
            <Link className="HeaderLink" to="/">
              Inspired
            </Link>
          </h1>
          <span className="HeaderLabel Text Text--xsmall">by Olga Yatsuk</span>
        </div>

        <div className="HeaderSocial">
          <Link to="#" className="HeaderSocial__Link Text Text--big icon-facebook-squared" />
          <Link
            to="https://www.instagram.com/inspired.brand/"
            target="_blank"
            className="HeaderSocial__Link Text Text--big icon-instagram"
          />
        </div>
      </header>
    </div>
  );
}

Header.propTypes = propTypes;

export default Header;
