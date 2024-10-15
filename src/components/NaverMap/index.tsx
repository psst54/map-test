import { useLayoutEffect, useRef, useState, ReactNode } from "react";

import { useNaverMapsContext } from "@/contexts/naverMapsContext";
import { NaverMapContext } from "@/contexts/naverMapContext";

import { Position } from "@/constants/coords";

export default function NaverMap({
  children,
  position,
}: {
  children: ReactNode;
  position: Position;
}) {
  const naverMaps = useNaverMapsContext();
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<naver.maps.Map | undefined>();

  // make map object
  useLayoutEffect(() => {
    if (!naverMaps) {
      return;
    }

    const newMap = new naverMaps.Map(ref.current as HTMLDivElement, {
      center: new naver.maps.LatLng(position.lat, position.lng),
      zoom: 17,
    });

    setMap(newMap);
  }, [naverMaps]);

  return (
    <NaverMapContext.Provider value={{ map }}>
      <div ref={ref} style={{ width: "500px", height: "500px" }} />
      {children}
    </NaverMapContext.Provider>
  );
}
