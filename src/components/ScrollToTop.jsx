import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window
    console.log("Scrolling to top for", pathname);
    window.scrollTo(0, 0);

    // Scroll any scrollable container
    const container = document.querySelector(".main-content");
    if (container) {
      container.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
