"use client";

import NaverMap from "@/components/NaverMap";
import NaverMapsProvider from "@/components/NaverMapsProvider";
import Marker from "@/components/Marker";
import MapEvent from "@/components/MapEvent";

import { UNIV_COORDS } from "@/constants/coords";

interface CoordEvent extends Event {
  coord: { x: number; y: number; _lat: number; _lng: number };
}

export default function Home() {
  function onClick(event: Event) {
    console.log((event as CoordEvent).coord);
  }

  return (
    <NaverMapsProvider>
      <NaverMap position={UNIV_COORDS.SOGANG}>
        <Marker position={UNIV_COORDS.SOGANG} />
        <MapEvent eventType="click" callback={onClick} />
      </NaverMap>
    </NaverMapsProvider>
  );
}
