import { Switch, Route } from "react-router-dom";

import "./app.sass";

import Homepage from "../../routes/homepage";
import FourOhFour from "../../routes/four-oh-four";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />;
      <Route component={FourOhFour} />
    </Switch>
  );
}

export default App;
