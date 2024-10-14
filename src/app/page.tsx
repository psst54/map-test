"use client";

import Marker from "@/components/Marker";
import NaverMap from "@/components/NaverMap";
import NaverMapsProvider from "@/components/NaverMapsProvider";

import { UNIV_COORDS } from "@/constants/coords";

export default function Home() {
  return (
    <NaverMapsProvider>
      <NaverMap position={UNIV_COORDS.SOGANG}>
        <Marker position={UNIV_COORDS.SOGANG} />
      </NaverMap>
    </NaverMapsProvider>
  );
}
