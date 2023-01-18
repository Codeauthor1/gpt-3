import PropTypes from "prop-types";

function Image({ src, containerStyle, imageStyle, alt, width, height }) {
  return (
    <div style={containerStyle}>
      <img
        style={imageStyle}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
}

Image.defaultProps = {
  width: "100px",
  height: "100px",
  alt: "GPT",
};
Image.prototype = {
  src: PropTypes.string.isRequired,
  containerStyle: PropTypes.string,
  imageStyle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
};
export default Image;
