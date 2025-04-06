import { useEffect } from 'react';
import '../index.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHover = () => cursor.classList.add("hovered");
    const removeHover = () => cursor.classList.remove("hovered");

    const checkPointer = (e) => {
      const target = e.target;
      const style = window.getComputedStyle(target);
      if (style.cursor === "pointer") {
        addHover();
      } else {
        removeHover();
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", checkPointer);
    document.addEventListener("mouseout", removeHover);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", checkPointer);
      document.removeEventListener("mouseout", removeHover);
    };
  }, []);

  return <div className="custom-cursor" />;
};

export default CustomCursor;