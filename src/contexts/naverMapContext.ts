import { createContext, useContext } from "react";

type MapContext = {
  map: naver.maps.Map | undefined;
} | null;

export const NaverMapContext = createContext<MapContext>(null);

export const useNaverMapContext: () => MapContext = () =>
  useContext(NaverMapContext);
