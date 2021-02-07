import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import SignIn from "./component/signin";
import Timeline from "./component/timeline";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/timeline">
          <Timeline/>
          </Route>
          <Route exact path="/">
          <SignIn/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
