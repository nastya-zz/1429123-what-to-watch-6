import React from "react";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import FilmList from "../common/film/film-list";
import {useSelector} from "react-redux";
import {filmsFavoriteSelector} from "../../store/film/film-selector";


const MyList = () => {
  const store = useSelector((state) => state);
  const myList = filmsFavoriteSelector(store);

  return (
    <>
      <div className="user-page">
        <Header headerClass={`page-header user-page__head`} >
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

export default MyList;
