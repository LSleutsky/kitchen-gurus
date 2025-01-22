import { useEffect, useRef } from "react";

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: KeyboardEvent | MouseEvent | TouchEvent) =>
      ref.current && !ref.current.contains(event.target as Node) && callback();

    document.addEventListener("keydown", evt => evt.key === "Escape" && handleClickOutside(evt));
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleClickOutside);
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [ref, callback]);

  return ref;
};

export default useClickOutside;
