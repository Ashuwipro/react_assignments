import React, { useState, useEffect } from "react";
import cat from "../images/cat1.jpg";
import dog from "../images/dog1.jpg";
import lion from "../images/lion1.jpg";
import parrot from "../images/parrot1.jpg";
import "./Main.css";

export default function Main() {
  const [pathArray, setPathArray] = useState([cat, dog, lion, parrot]);

  const [number, setNumber] = useState(0);
  const [path, setPath] = useState(pathArray[number]);

  const handlePrevious = () => {
    if (number === 0) {
      setNumber(number + 3);
    } else {
      setNumber(number - 1);
    }
  };

  const handleNext = () => {
    if (number === 3) {
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  };

  useEffect(() => {
    setPath(pathArray[number]);
  }, [number, pathArray]);

  return (
    <div>
      <div>
        <button type="button" onClick={handlePrevious}>
          Previous
        </button>
        <img className="img-style" src={path} alt="#" />
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
      <div>
        <span>{number}</span>
      </div>
    </div>
  );
}
