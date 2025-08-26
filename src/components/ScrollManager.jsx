// src/components/ScrollManager.jsx
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = new Map();

export default function ScrollManager() {
  const location = useLocation();

  // Save scroll position before route changes
  useEffect(() => {
    const handleSave = () => {
      scrollPositions.set(location.key, window.scrollY);
    };

    window.addEventListener("beforeunload", handleSave);
    return () => {
      window.removeEventListener("beforeunload", handleSave);
      handleSave();
    };
  }, [location]);

  // Restore scroll position (or go to top for new pages)
  useLayoutEffect(() => {
    const savedY = scrollPositions.get(location.key);
    if (savedY !== undefined) {
      // back/forward navigation → restore previous scroll
      window.scrollTo(0, savedY);
    } else {
      // new navigation → start at top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
