import { Position } from "@/constants/coords";

import { useNaverMapContext } from "@/contexts/naverMapContext";

export default function Marker({ position }: { position: Position }) {
  const mapContext = useNaverMapContext();

  if (!mapContext) {
    return null;
  }

  new naver.maps.Marker({
    position: new naver.maps.LatLng(position.lat, position.lng),
    map: mapContext.map,
  });

  return null;
}
