import { useState } from "react";
import { avengers } from "./data";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Avengers from "./pages/Avengers";
import Avenger from "./pages/Avenger";

function App() {
  const [avengersList] = useState(avengers);
  console.log(avengersList);

  return (
    <div className="App">
      <nav className="navbar">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/avengers">
          <Avengers avengersList={avengersList} />
        </Route>
        <Route path="/avengers/:avengerId">
          <Avenger avengersList={avengersList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
