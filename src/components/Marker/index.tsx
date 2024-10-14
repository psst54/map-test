import { UNIV_COORDS } from "@/constants/coords";
import { useNaverMapContext } from "@/contexts/naverMapContext";

export default function Marker() {
  const mapContext = useNaverMapContext();

  if (!mapContext) {
    return null;
  }

  new naver.maps.Marker({
    position: new naver.maps.LatLng(
      UNIV_COORDS.SOGANG.lat,
      UNIV_COORDS.SOGANG.lng
    ),
    map: mapContext.map,
  });

  return null;
}
