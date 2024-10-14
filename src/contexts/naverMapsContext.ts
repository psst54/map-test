import { createContext, useContext } from "react";

export const NaverMapsContext = createContext<typeof naver.maps | undefined>(
  undefined
);

export const useNaverMapsContext: () => typeof naver.maps | undefined = () =>
  useContext(NaverMapsContext);
