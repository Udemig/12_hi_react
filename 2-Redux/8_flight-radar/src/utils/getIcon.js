import { divIcon } from "leaflet";

export const getIcon = (deg, isActive, isDetail) => {
  return divIcon({
    html: `<div style="color:red;transform: rotate(${deg - 45}deg)">
 <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4180 4491 c-145 -46 -200 -84 -681 -462 -202 -159 -376 -289 -386
-289 -26 1 -733 127 -738 132 -3 2 16 45 41 95 39 74 47 102 51 159 3 53 0 77
-14 104 -73 140 -337 59 -564 -172 l-85 -88 -290 51 -291 52 -191 -164 c-106
-90 -188 -167 -184 -171 4 -4 356 -168 782 -363 426 -196 778 -359 782 -363 7
-7 -979 -1208 -1005 -1225 -7 -4 -151 19 -322 51 l-310 60 -83 -82 -82 -81
562 -562 563 -563 81 81 c51 50 80 87 78 98 -29 128 -113 616 -107 622 64 62
1220 1006 1225 1001 4 -4 167 -356 363 -782 195 -426 359 -778 363 -782 4 -4
81 78 171 184 l164 191 -51 290 -51 289 87 87 c144 142 230 292 239 416 8 117
-48 170 -171 162 -57 -4 -85 -12 -159 -51 -50 -25 -93 -44 -95 -41 -5 5 -131
712 -132 738 0 10 130 184 289 386 325 413 365 467 414 566 87 175 89 300 6
384 -62 62 -160 77 -269 42z"/>
</g>
</svg>

     </div>`,
    className: `marker  ${isDetail && "passive"} ${isActive && "active-flight"}`,
    iconSize: [30, 30],
  });
};

export const getAirportIcon = (isRed) => {
  return divIcon({
    html: `<div style='background:${
      isRed ? "red" : "#535bf2"
    } ; width:25px; height:25px; border-radius:50%; border: 2px solid white;'></div>`,
    className: "",
    iconSize: [25, 25],
  });
};
