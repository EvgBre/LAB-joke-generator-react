import React from 'react';
import PropTypes from 'prop-types';

export default function Joke({ joke, btnText }) {
  return (
    <>
      <div>{joke.setup}</div>
      <p>{btnText !== 'Get Punchline' ? joke.punchline : ''}</p>
    </>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
