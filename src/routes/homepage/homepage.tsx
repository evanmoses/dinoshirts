import "./homepage.sass";

import ItemDirectory from "../../components/item-directory";
import Splash from "../../components/splash";

function Homepage() {
  return (
    <>
      <Splash />
      <ItemDirectory />
    </>
  );
}

export default Homepage;
