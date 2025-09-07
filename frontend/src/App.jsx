import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { JoinUs } from "./pages/JoinUs";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
