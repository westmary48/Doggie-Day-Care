import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  behavScore: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  isCute: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,

});

export default { dogShape };
