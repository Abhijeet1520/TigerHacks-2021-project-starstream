import Home from "./Home";
import Galaxy from "./Galaxy";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./styles.css";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" element={Home} />
        <Route exact path="/galaxy" element={Galaxy} />
      </Switch>
    </Router>
  );
}

export default App;
