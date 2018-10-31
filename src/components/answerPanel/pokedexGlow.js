import React from "react";

export default function pokedexGlow({ color }) {
  return (
    <svg
      className="pokedexGlow"
      height="200"
      width="200"
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="myblurfilter1" width="120%" height="120%">
        <feGaussianBlur stdDeviation="1" result="blur" />
      </filter>
      <filter id="myblurfilter2" width="120%" height="120%">
        <feGaussianBlur stdDeviation="2" result="blur" />
      </filter>
      <filter id="pixelate" x="0" y="0">
        <feFlood x="1" y="1" height="1" width="1" />

        <feComposite width="2" height="2" />

        <feTile result="a" />

        <feComposite in="SourceGraphic" in2="a" operator="in" />

        <feMorphology operator="dilate" radius="2" />
      </filter>
      {/* White outer circle */}
      <circle
        cx="110"
        cy="110"
        r="100"
        fill="#FFF"
        stroke="#000"
        stroke-width="4"
      />
      {/* Main circle */}
      {console.log(color)}
      <circle
        cx="114"
        cy="102"
        r="81"
        fill={color}
        stroke="#000"
        stroke-width="4"
      />
      {/* Shadow */}
      <circle
        cx="120"
        cy="110"
        r="75"
        fill="#000"
        fill-opacity="0.2"
        style={{ filter: "url(#myblurfilter1)" }}
      />
      {/* Inner Circle */}
      <circle
        cx="112"
        cy="73"
        r="50"
        fill={color}
        style={{ filter: "url(#myblurfilter2)" }}
      />
      {/* Glow */}
      <circle
        cx="108"
        cy="60"
        r="20"
        fill="#FFF"
        fill-opacity="0.5"
        style={{ filter: "url(#myblurfilter2)" }}
      />
    </svg>
  );
}
