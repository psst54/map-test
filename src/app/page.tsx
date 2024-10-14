"use client";

import { useEffect, useRef } from "react";
import useNaverMap from "@/hooks/useNaverMap";

export default function Home() {
  const naverMaps = useNaverMap();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!naverMaps || !ref.current) {
      return;
    }

    new naverMaps.Map(ref.current);
  }, [naverMaps]);

  if (!naverMaps) {
    return null;
  }

  return (
    <div>
      <div ref={ref} style={{ width: "500px", height: "500px" }}></div>;
    </div>
  );
}
