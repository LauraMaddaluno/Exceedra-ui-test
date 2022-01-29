import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormComp from "./components/FormComp.js";
import Welcome from "./components/Welcome.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComp />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
