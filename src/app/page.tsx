"use client";

import NaverMap from "@/components/NaverMap";
import NaverMapsProvider from "@/components/NaverMapsProvider";
import Marker from "@/components/Marker";
import MapEvent from "@/components/MapEvent";

import { UNIV_COORDS } from "@/constants/coords";

export default function Home() {
  return (
    <NaverMapsProvider>
      <NaverMap position={UNIV_COORDS.SOGANG}>
        <Marker position={UNIV_COORDS.SOGANG} />
        <MapEvent
          eventType="click"
          callback={(event: Event) => {
            console.log(event.coord);
          }}
        />
      </NaverMap>
    </NaverMapsProvider>
  );
}
