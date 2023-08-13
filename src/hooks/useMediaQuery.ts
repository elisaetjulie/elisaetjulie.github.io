import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [isMatched, setIsMatched] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === undefined) return;
    const matchMedia = window.matchMedia(query.replace("@media ", ""));

    const handleChange = () => {
      setIsMatched(matchMedia.matches);
    };

    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMatched;
};

export default useMediaQuery;
