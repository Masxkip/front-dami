import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Scrolling to top for", pathname);

    // Smooth scroll to top of the window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // If you also want to handle a scrollable container
    const container = document.querySelector(".main-content");
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
