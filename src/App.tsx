import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./assets/layouts/NavigationBar/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
