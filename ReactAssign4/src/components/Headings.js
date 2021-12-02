import React from "react";
import { Link } from "react-router-dom";

export default function Headings() {
  return (
    <div>
      <ul>
        <li style={{ display: "inline", marginRight: "50px" }}>
          <Link style={{ color: "blue" }} to="/">
            About
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link style={{ color: "red" }} to="/songs">
            Songs
          </Link>
        </li>
      </ul>
    </div>
  );
}
