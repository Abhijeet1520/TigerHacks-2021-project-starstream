import Home from "./Home";
import Galaxy from "./Galaxy";
import Stream from "./Stream";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./styles.css";

function App() {

  return (
    <Router >
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/galaxy" component={Galaxy} />
        <Route path="/stream" component={Stream} />
      </Switch>
    </Router>
  );
}

export default App;
