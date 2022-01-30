import { useState, useCallback } from 'react';

export function generateUID() {
  return Math.random().toString(16).slice(2);
}

export function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}
