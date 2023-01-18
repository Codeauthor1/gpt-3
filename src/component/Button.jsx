import propTypes from "prop-types";

function Button({ text, style, className }) {
  return (
    <button className={className} style={style}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  style: {
    backgroundColor: "inherit",
    outline: "none",
    border: "none",
    color: "rgba(255, 255, 255, 1)",
    padding: "10px 15px",
    font: " 700 1.2em san-serif",
    cursor: "pointer",
  },
};
Button.propTypes = {
  style: propTypes.object,
  text: propTypes.string.isRequired,
  class: propTypes.string,
};

export default Button;
