import PropTypes from "prop-types";

function HeaderTemp({ header, paragraph }) {
  return (
    <div
      style={{
        width: "33.33%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "30px",
        }}
      >
        <div
          style={{
            height: "3px",
            width: "40px",
            backgroundColor: "#ae67fa",
            background: "linear-gradient(to right, #ae67fa 10%, #f49867 60%)",
          }}
        ></div>
        <h3>{header}</h3>
      </div>
      <p>{paragraph}</p>
    </div>
  );
}

HeaderTemp.Prototype = {
  header: PropTypes.string,
  paragraph: PropTypes.string,
};

export default HeaderTemp;
