import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilmById} from "../../store/api-actions";
import LoadingScreen from "../loading/loading";
import {useParams} from "react-router-dom";
import {ActionCreator} from "../../store/action";

// eslint-disable-next-line react/display-name
const withSelectedFilm = (Component) => ({...props}) => {
  const {id} = useParams();
  const film = useSelector((state) => state.selectedFilm);
  const isFilmLoaded = useSelector((state) => state.isSelectedFilmLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFilmLoaded) {
      dispatch(fetchFilmById(id));
    }
  }, [isFilmLoaded]);
  useEffect(() => {
    dispatch(ActionCreator.isSelectedFilmByIdLoaded(false));
  }, [id]);


  if (!isFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }


  return (<Component {...props} film={film} id={id} />);
};

export default withSelectedFilm;
