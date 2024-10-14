import { createContext, useContext } from "react";

export const NaverMapContext = createContext<naver.maps.Map | undefined>(
  undefined
);

export const useNaverMapContext: () => naver.maps.Map | undefined = () =>
  useContext(NaverMapContext);
