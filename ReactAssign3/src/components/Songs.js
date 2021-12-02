import React, { useState, useEffect } from "react";

export default function Songs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/songs")
      .then((res) => {
        return res.json();
      })
      .then((dt) => {
        setData(dt);
      });
  }, []);
  return (
    <div>
      <div style={{ color: "blue", marginLeft: "20px", fontWeight: "bold" }}>
        Songs List
      </div>
      {data && (
        <div>
          <table
            style={{
              border: "1px solid green",
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            <thead style={{ fontWeight: "bold" }}>
              <tr>
                <td>Movie</td>
                <td>Title</td>
                <td>Song Length</td>
                <td>Singer</td>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.id}>
                  <td>{d.movie}</td>
                  <td>{d.title}</td>
                  <td>{d.songLength}</td>
                  <td>{d.singer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
