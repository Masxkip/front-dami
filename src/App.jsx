
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Fqs from "./pages/Fqs";
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
           <Route path="/services" element={<Service />} />
          <Route path="/faq" element={<Fqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
