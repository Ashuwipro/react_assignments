import React, { useState } from "react";
import AddDisplayForm from "./components/AddDisplayForm";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  const [myArray, setMyArray] = useState([
    {
      id: 1,
      movie: "Anuradh",
      title: "JabDardNahiTha",
      songLength: "4:50",
      singer: "Kishore",
    },
    {
      id: 2,
      movie: "KabhiKabhi",
      title: "MePalDoPal",
      songLength: "3:45",
      singer: "Mukesh",
    },
    {
      id: 3,
      movie: "Aradhana",
      title: "AajaTujhko",
      songLength: "4:45",
      singer: "Rafi",
    },
    {
      id: 4,
      movie: "Mungarumale",
      title: "Anisuthidhe",
      songLength: "5:45",
      singer: "SonuNigam",
    },
  ]);

  const [count, setCount] = useState(myArray.length);

  const sendDataToParent=({textMovie, textTitle, textSongLength, textSinger})=>{
    setMyArray([...myArray,{id: myArray.length+1,movie: textMovie, title: textTitle, songLength: textSongLength, singer: textSinger}]);
    setCount(myArray.length+1);
  }

  return (
    <div>
      <Header />
      <hr />
      <Info count={count} />
      <hr />
      <AddDisplayForm list={myArray} sendDataToParent={sendDataToParent} />
    </div>
  );
}

export default App;
