import Home from "./Home";
import Galaxy from "./Galaxy";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import createHistory from "history/createBrowserHistory" 
import "./styles.css";

function App() {

  return (
    <Router >
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/galaxy" component={Galaxy} />
      </Switch>
    </Router>
  );
}

export default App;
