import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (ref, threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return isVisible;
};

export default useIntersectionObserver;
