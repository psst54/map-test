import { UNIV_COORDS } from "@/constants/coords";
import { NaverMapContext } from "@/contexts/naverMapContext";
import useNaverMap from "@/hooks/useNaverMap";
import { useLayoutEffect, useRef, useState } from "react";

export default function NaverMap({ children }) {
  const naverMaps = useNaverMap();
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  useLayoutEffect(() => {
    if (!naverMaps) {
      return;
    }

    setMap(
      new naverMaps.Map(ref.current as HTMLDivElement, {
        center: new naver.maps.LatLng(
          UNIV_COORDS.SOGANG.lat,
          UNIV_COORDS.SOGANG.lng
        ),
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
