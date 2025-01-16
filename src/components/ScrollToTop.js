import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Скрол до верху сторінки
    window.scrollTo(0, 0);
  }, [pathname]); // Виконується кожного разу при зміні шляху

  return null; // Цей компонент не відображає нічого в DOM
};

export default ScrollToTop;
