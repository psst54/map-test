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

  useLayoutEffect(() => {
    if (!naverMaps) {
      return;
    }

    setMap(
      new naverMaps.Map(ref.current as HTMLDivElement, {
        center: new naver.maps.LatLng(position.lat, position.lng),
        zoom: 17,
      })
    );

    // naverMaps.Event.addListener(map, "click", function (e) {
    //   console.log(e.coord);
    // });
  }, [naverMaps]);

  if (!naverMaps) {
    return null;
  }

  return (
    <NaverMapContext.Provider value={{ map }}>
      <div ref={ref} style={{ width: "500px", height: "500px" }} />
      {children}
    </NaverMapContext.Provider>
  );
}
