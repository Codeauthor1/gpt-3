import HeaderImage from "./HeaderImage";
import HeroBodyText from "./HeroBodyText";
import HeroContent from "./HeroContent";
import HeroHeaderText from "./HeroHeaderText";
import SearchForm from "./SearchForm";
import SignupUsers from "./SignupUsers";

function Hero() {
  return (
    <main
      style={{
        marginTop: "50px",
        display: " flex",
        alignItems: "center",
        height: "65%",
      }}
    >
      <HeroContent
        headerText={<HeroHeaderText />}
        BodyText={<HeroBodyText />}
        SearchForm={<SearchForm />}
        SignupUsers={<SignupUsers />}
      />
      <HeaderImage />
    </main>
  );
}

export default Hero;
