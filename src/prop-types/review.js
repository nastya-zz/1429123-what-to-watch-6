import PropTypes from 'prop-types';

const reviewShape = {
  id: PropTypes.number.isRequired,
  user: {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  },
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};


export const reviewPropTypes = PropTypes.objectOf(reviewShape);
