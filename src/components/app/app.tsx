import { Switch, Route } from "react-router-dom";

import Header from "../header";
import Homepage from "../../routes/homepage";
import FourOhFour from "../../routes/four-oh-four";
import ShopPage from "../../routes/shop";
import ItemPage from "../../routes/item";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />;
        <Route exact path="/shop" component={ShopPage} />;
        <Route exact path="/item/:id" component={ItemPage} />;
        <Route component={FourOhFour} />
      </Switch>
    </>
  );
}

export default App;
