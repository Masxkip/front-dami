// src/components/ScrollManager.jsx
import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const positions = new Map();

export default function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType(); // 'POP' for back/forward

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const save = () => positions.set(location.key, window.scrollY);
    window.addEventListener("beforeunload", save);
    return () => {
      window.removeEventListener("beforeunload", save);
      save();
    };
  }, [location]);

  useLayoutEffect(() => {
    const y = navType === "POP" ? positions.get(location.key) ?? 0 : 0;
    window.scrollTo(0, y);
  }, [location, navType]);

  return null;
}
