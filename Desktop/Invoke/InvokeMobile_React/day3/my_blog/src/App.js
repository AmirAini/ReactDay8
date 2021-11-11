import './App.css';
import Login from "../src/containers/login";
import Dashboard from './containers/dashboard/index.js';
import Header from './components/header';
import Details from './containers/dashboard/Details';
import CreateProduct from './createProducts';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header />
        <Switch>
          <Route path="/create" component={CreateProduct} />
          <Route path="/dashboard/:id" component={Details} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/" exact component={Login} />
          
        </Switch>
      
    </Router>
  );
}

export default App;
