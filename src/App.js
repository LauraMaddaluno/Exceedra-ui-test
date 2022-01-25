import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/ui/Form.js";
import Welcome from "./components/Welcome.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
