import Image from "../Img";

import heroImg from "../../images/Header Illustration.png";

function HeaderImage() {
  return (
    <Image
      src={heroImg}
      containerStyle={{
        flex: 1,
        height: "100%",
      }}
      imageStyle={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default HeaderImage;
