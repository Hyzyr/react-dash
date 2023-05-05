import { useState, useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";

const useCurrentPath = ({ parentPath = "", routes = null, onChange }) => {
  const { pathname } = useLocation();
  const [currentPath, setCurrentPath] = useState(null);

  useEffect(() => {
    let newPath =
      routes === null
        ? null
        : routes.filter((route) => {
            return matchPath(
              { path: `/${parentPath}/${route}/*`, exact: false },
              pathname
            );
          })[0];
    setCurrentPath(newPath);
    if (onChange) onChange(newPath);
  }, [pathname, routes]);

  return currentPath;
};

export default useCurrentPath;
