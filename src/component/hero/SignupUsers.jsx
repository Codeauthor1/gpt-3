import Image from "../Img";

import groupImage from "../../images/Group 81.png";

export default function SignupUsers() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        width="30"
        height="30"
        src={groupImage}
        imageStyle={{
          width: "100%",
          cursor: "pointer",
        }}
      />
      <p>1,600 people requested access a visit in last 24 hours</p>
    </div>
  );
}
