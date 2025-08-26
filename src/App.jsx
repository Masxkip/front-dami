
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./layouts/SiteLayout";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* forces each new page to start at top */}
        <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
