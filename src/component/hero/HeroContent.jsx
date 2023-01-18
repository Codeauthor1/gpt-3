import PropTypes from "prop-types";

function HeroContent({ headerText, BodyText, SearchForm, SignupUsers }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 2,
        height: "100%",
        maxHeight: "max-content",
      }}
    >
      <div>{headerText}</div>
      <div>{BodyText}</div>
      <div>{SearchForm}</div>
      <div>{SignupUsers}</div>
    </div>
  );
}

HeroContent.propTypes = {
  headerText: PropTypes.object.isRequired,
  BodyText: PropTypes.object.isRequired,
  SearchForm: PropTypes.object.isRequired,
  SignupUsers: PropTypes.object.isRequired,
};

export default HeroContent;
