import { useEffect } from "react";

const usePressKey = (key, action) => {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      return () => {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action],
  );
};

export default usePressKey;
