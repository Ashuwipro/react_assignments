import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SongDetails() {
  const params = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/songs")
      .then((res) => {
        return res.json();
      })
      .then((dt) => {
        setDetail(dt);
      });
  }, []);

  return (
    <div>
      <h2>Song details</h2>
      {detail && detail[params.id - 1] && detail[params.id - 1]["movie"] && (
        <h4>Movie name : {detail[params.id - 1]["movie"]}</h4>
      )}
    </div>
  );
}
