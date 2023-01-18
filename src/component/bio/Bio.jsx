import BioWrapper from "./BioWrapper";
import GPT from "./GPT";
import Headers from "./Headers";

function Bio() {
  return (
    <section style={container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "90%",
          maxHeight: "fit-content",
          height: "100%",
        }}
      >
        <GPT />
        <BioWrapper />
        <Headers />
      </div>
    </section>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "radial-gradient( farthest-corner at 100px 100px, rgba(15, 66, 121, 0.1) 0% , rgba(20, 96, 179, 0.1) 100%) ",
  backdropFilter: "blur(30px)",
  WebkitBackdropFilter: "blur(30px)",
  backdropClip: "padding-box",
  boxShadow: "5px 5px 5px rgba(20, 96, 179, 0.05)",
  height: "500px",
  maxHeight: "fit-content",
  width: "100%",
};
export default Bio;
