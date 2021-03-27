import React from "react";
import FilmOverview from "./film-overview";
import FilmDetails from "./film-details";
import FilmReviews from "./film-reviews";
import {useState} from "react";
import FilmTabList from "./film-tab-list";
import {Tab} from "../../constants/common";
import {filmPropTypes} from "../../prop-types/film";

const FilmTabs = (props) => {
  const {film} = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs = Object.values(Tab);

  const handleChangeTab = (idx) => {
    setActiveTabIndex(idx);
  };

  const getTabContent = (i) => {
    switch (tabs[i]) {
      case Tab.DETAILS:
        return <FilmDetails film={film} />;
      case Tab.REVIEWS:
        return <FilmReviews film={film} />;
      default:
        return <FilmOverview film={film} />;
    }
  };

  return (
    <div className="movie-card__desc">
      <FilmTabList tabs={tabs} activeTabIndex={activeTabIndex} handleChangeTab={handleChangeTab} />

      {getTabContent(activeTabIndex)}
    </div>

  );
};

FilmTabs.propTypes = {
  film: filmPropTypes
};

export default FilmTabs;
