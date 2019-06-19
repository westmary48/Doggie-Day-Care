import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isInGoodStanding: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
});

export default { employeeShape };
