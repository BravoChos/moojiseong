import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Screen from "./components/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen children={<Home />} />} />
      </Routes>
    </Router>
  );
}

export default App;
