import react from "react";
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import FirstLogin from "./firstLogin";
import Home from "./home";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<FirstLogin />}/>
    <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
