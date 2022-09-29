import { useState } from "react";

interface Sort<T> {
  sortBy: keyof T;
  direction: "ASC" | "DESC";
}

export const useSort = <T extends Record<string, unknown>>({
  items,
  defaultSort,
}: {
  items: T[];
  defaultSort: Sort<T>;
}): { sortedItems: T[]; setSort: (sort: Sort<T>) => void } => {
  const [{ sortBy, direction }, setSort] = useState(defaultSort);

  const sortedItems = items.sort((itemA, itemB) => {
    const valueA = itemA[sortBy];
    const valueB = itemB[sortBy];

    if (direction === "ASC") {
      return Number(valueA) - Number(valueB);
    }
    return Number(valueB) - Number(valueA);
  });

  return {
    sortedItems,
    setSort: (sort) => {
      setSort(sort);
    },
  };
};
