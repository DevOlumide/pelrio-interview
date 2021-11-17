import react from "react";
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FirstLogin from "./firstLogin";
import Home from "./home";
import Login from "./login";

function App() {
  return (
    <div className="">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<FirstLogin />}/>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
