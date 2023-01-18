import PropTypes from "prop-types";
import Button from "../Button";

function SearchForm({ InputStyle }) {
  return (
    <div style={{ display: "flex " }}>
      <input
        type="text"
        name="SearchForm"
        id="SearchForm"
        placeholder="Your email address"
        style={InputStyle}
      />
      <Button
        style={{
          backgroundColor: "rgba(255, 72, 32, 1)",
          color: "#fff",
          font: "700 1em sans-serif",
          height: "40px",
          width: "15%",
          cursor: "pointer",
        }}
        text="Get Started"
      />
    </div>
  );
}
SearchForm.defaultProps = {
  InputStyle: {
    backgroundColor: "#052d56",
    color: "#3d6184",
    height: " 40px",
    width: "60%",
    padding: " 0 10px",
  },
};
SearchForm.prototype = {
  InputStyle: PropTypes.string,
};
export default SearchForm;
