import * as React from 'react'
import Main from '../main/main';
import {IFilm} from "../../mocks/films";


export interface IAppProps {
  genres: string[]
  films: IFilm[]
}

const App = (props :IAppProps) => {

  const {genres, films} = props;
  return (
    <>
      <Main
        genres={genres}
        films={films}
      />
    </>
  );
};

export default App;
