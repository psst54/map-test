import useNaverMap from "@/hooks/useNaverMap";
import { useLayoutEffect, useRef } from "react";

export default function NaverMap() {
  const naverMaps = useNaverMap();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!naverMaps) {
      return;
    }

    new naverMaps.Map(ref.current as HTMLDivElement);
  }, [naverMaps]);

  if (!naverMaps) {
    return null;
  }

  return (
    <div>
      <div ref={ref} style={{ width: "500px", height: "500px" }} />
    </div>
  );
}
