import React from "react";
import PropTypes from "prop-types";

const FilmTabList = (props) => {
  const {tabs, activeTabIndex, handleChangeTab} = props;

  const liClass = (isActive) => {
    return isActive ? `movie-nav__item  movie-nav__item--active` : `movie-nav__item`;
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab, i) => (
          <li
            key={tab}
            className={liClass(i === activeTabIndex)}
          >
            <a onClick={() => handleChangeTab(i)} className="movie-nav__link">{tab}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

FilmTabList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  handleChangeTab: PropTypes.func.isRequired
};

export default FilmTabList;
