import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import FormComp from "./components/FormComp.js";
import Welcome from "./components/Welcome.js";
import Login from "./components/Login.js";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/formcomp" element={<FormComp />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
