import { Routes, Route, Router } from 'react-router-dom';
import Home from "./container/home";
import Details from "./container/details";

function App() {
  return (
      <Routes basename={process.env.PUBLIC_URL} className="App">
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/" element={<Home />} exact></Route>
      </Routes>    
  );
}

export default App;
