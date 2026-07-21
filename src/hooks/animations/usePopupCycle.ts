import { useEffect, useState } from "react";

export default function usePopupCycle(total: number, interval = 2500) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(id);
  }, [total, interval]);

  return active;
}
