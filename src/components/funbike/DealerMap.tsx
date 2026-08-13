import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Dealer } from "@/data/dealers";

function icon(active: boolean) {
  return L.divIcon({
    className: "",
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    html: `<span style="display:block;width:18px;height:18px;border-radius:9999px;background:var(--primary);box-shadow:0 0 0 ${
      active ? "8px" : "4px"
    } color-mix(in oklab, var(--primary) 25%, transparent);transition:box-shadow .3s ease"></span>`,
  });
}

function Flyer({ dealer }: { dealer: Dealer }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([dealer.lat, dealer.lng], 10, { duration: 1.1 });
  }, [dealer, map]);
  return null;
}

export default function DealerMap({
  list,
  selected,
  onSelect,
}: {
  list: Dealer[];
  selected: Dealer;
  onSelect: (slug: string) => void;
}) {
  return (
    <MapContainer
      center={[selected.lat, selected.lng]}
      zoom={9}
      scrollWheelZoom={false}
      className="h-[420px] w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Flyer dealer={selected} />
      {list.map((d) => (
        <Marker
          key={d.slug}
          position={[d.lat, d.lng]}
          icon={icon(d.slug === selected.slug)}
          eventHandlers={{ click: () => onSelect(d.slug) }}
        >
          <Popup>
            <div className="font-display text-base uppercase">{d.name}</div>
            <div className="text-xs">{d.address}</div>
            <div className="text-xs">{d.phone1}</div>
            {d.phone2 && <div className="text-xs">{d.phone2}</div>}
            <div className="text-xs">{d.email}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
