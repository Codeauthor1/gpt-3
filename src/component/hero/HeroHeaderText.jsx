function HeroHeaderText() {
  return (
    <h1 style={style.clipText}>
      Let's Build Something <br /> amazing with GPT-3 <br /> OpenAI
    </h1>
  );
}

const style = {
  clipText: {
    font: "3.4em sans-serif",
    fontWeight: 900,
    background: "linear-gradient(to right, #ae67fa 10%, #f49867 60%)",
    backgroundColor: "#ae67fa",
    lineHeight: "55px",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  },
};
export default HeroHeaderText;
