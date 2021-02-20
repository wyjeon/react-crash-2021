import PropsTypes from 'prop-types';

const Button = ({ onClick, color, text }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.propTypes = {
  text: PropsTypes.string,
  color: PropsTypes.string,
  onClick: PropsTypes.func,
};

export default Button;
