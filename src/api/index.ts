import { useMemo } from "react";

export const getThings = () => {
  return Array(20)
    .fill(null)
    .map((_, idx) => ({
      /**
       * the id of the thing being returned
       */
      id: `thing-${idx}`,
      value1: Math.floor(Math.random() * 200),
      value2: Math.floor(Math.random() * 200),
      name: `Thing number ${idx + 1}`,
      /**
       * whether or not the thing is good
       */
      isGood: Math.random() > 0.5,
    }));
};

export const useThings = () => useMemo(() => getThings(), []);
