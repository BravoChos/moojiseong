import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Guide from "./screens/guide";
import MyMoo from "./screens/mymoo";
import Calculator from "./screens/calculator";
import Screen from "./components/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/calculator" element={<Screen children={<Calculator />} />} />
        <Route path="/mymoo" element={<Screen children={<MyMoo />} />} />
        <Route path="/guide" element={<Screen children={<Guide />} />} />
        <Route path="/login" element={<Screen children={<Login />} />} />
        <Route path="/signup" element={<Screen children={<Signup />} />} />
        <Route path="/" element={<Screen children={<Home />} />} />
      </Routes>
    </Router>
  );
}

export default App;
