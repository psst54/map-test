import { Position } from "@/constants/coords";

import { useNaverMapContext } from "@/contexts/naverMapContext";
import { useLayoutEffect, useRef } from "react";

const MARKER_WIDTH = 48;
const MARKER_HEIGHT = 48;

export default function Marker({ position }: { position: Position }) {
  const mapContext = useNaverMapContext();
  const markerRef = useRef(null);

  useLayoutEffect(() => {
    if (!markerRef.current || !mapContext) {
      return;
    }

    new naver.maps.Marker({
      position: new naver.maps.LatLng(position.lat, position.lng),
      map: mapContext.map,
      icon: {
        content: markerRef.current,
        size: new naver.maps.Size(MARKER_WIDTH, MARKER_HEIGHT),
        anchor: new naver.maps.Point(MARKER_WIDTH / 2, MARKER_HEIGHT),
      },
    });
  }, [mapContext]);

  return (
    <div
      ref={markerRef}
      style={{
        width: `${MARKER_WIDTH}px`,
        height: `${MARKER_HEIGHT}px`,
        border: "2px solid red",
        borderRadius: "100%",
      }}
    />
  );
}
