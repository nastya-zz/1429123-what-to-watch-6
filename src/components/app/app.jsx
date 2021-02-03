import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {

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

App.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;
