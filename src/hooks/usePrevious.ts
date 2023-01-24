import { useRef, useEffect } from "react";

export const usePrevious = (value: number): number => {
  const ref = useRef<number>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current || 0;
};
