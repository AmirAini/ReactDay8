import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home}/>
          <Route path="/" exact component={Register} />
        </Switch>
    </Router>
  );
}


export default App;
