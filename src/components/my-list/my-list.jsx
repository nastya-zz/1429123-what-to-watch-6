import React, {useEffect} from "react";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import FilmList from "../common/film/film-list";
import {useDispatch, useSelector} from "react-redux";
import {fetchFavoriteFilmList} from "../../store/api-actions";
import PropTypes from "prop-types";


const MyList = ({history}) => {
  const myList = useSelector(({FILM}) => FILM.myList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilmList());
  }, []);


  return (
    <>
      <div className="user-page">
        <Header headerClass={`page-header user-page__head`} history={history}>
          <h1 className="page-title user-page__title">My list</h1>
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmList films={myList} />
        </section>

        <Footer />
      </div>
    </>
  );
};

MyList.propTypes = {
  history: PropTypes.object
};

export default MyList;
