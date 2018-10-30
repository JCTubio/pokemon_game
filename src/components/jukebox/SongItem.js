import React from "react";

export default function SongItem({ songName, onClick }) {
  return (
    <p
      onClick={() => {
        onClick(songName);
      }}
    >
      {songName}
    </p>
  );
}
