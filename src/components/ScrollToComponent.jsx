import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToComponent = () => {
  const [initialRender, setInitialRender] = useState(true);
  const { pathname } = useLocation();
  const componentId = pathname === "/" ? "home" : pathname.substring(1);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    const element = document.getElementById(componentId);

    if (element) {
      element.scrollIntoView();
    }
    // Not adding initialRender as a dependency to avoid a re-render on it's change.
  }, [componentId]);

  return null;
};

export default ScrollToComponent;
