import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Stop the browser from restoring old scroll on SPA navigations
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If you use #anchors and want to jump to them, skip forcing top
    if (hash) return;

    // Scroll the window to top
    window.scrollTo({ top: 0, left: 0, behavior });

    // Extra safety for some browsers/edges
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search, hash, behavior]);

  return null;
}
