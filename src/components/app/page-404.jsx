import React from 'react';

const PageNotFound = () => {
  const divStyle = {
    display: `flex`,
    color: `#333039`,
    width: `100wh`,
    height: `100vh`,
    backgroundImage: `url(` + `img/404.png` + `)`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `100%`
  };

  const linkStyle = {
    color: `white`,
    margin: `auto auto 0`,
    paddingBottom: `20px`,
    display: `inline-block`
  };

  return (
    <>
      <div style={divStyle}>
        <a style={linkStyle} href="/">Перейти на главную страницу</a>
      </div>
    </>
  );
};

export default PageNotFound;
