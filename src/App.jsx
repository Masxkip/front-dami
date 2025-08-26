import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import About from "./pages/About";
import Fqs from "./pages/Fqs";
import ScrollManager from "./components/ScrollManager"; // ✅


function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Fqs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
