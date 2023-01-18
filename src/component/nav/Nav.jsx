import Image from "../Img";
import Account from "./Account";
import List from "./List";

import logo from "../../images/GPT-3.svg";

function Nav() {
  return (
    <nav style={navContainer}>
      <Image
        src={logo}
        containerStyle={{
          cursor: "pointer",
          flex: "1.3",
          height: "100%",
          width: "100%",
        }}
      />
      <List />
      <Account />
    </nav>
  );
}

const navContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "90px",
  width: "100%",
};
export default Nav;
