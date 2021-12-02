import React from "react";

export default function AddDisplayForm(props) {
  let textMovie = React.createRef();
  let textTitle = React.createRef();
  let textSongLength = React.createRef();
  let textSinger = React.createRef();

  const handleClick = () => {
    textMovie = textMovie.current.value;
    textTitle = textTitle.current.value;
    textSongLength = textSongLength.current.value;
    textSinger = textSinger.current.value;
    props.sendDataToParent({
      textMovie,
      textTitle,
      textSongLength,
      textSinger,
    });
  };

  return (
    <div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          color: "blue",
          fontWeight: "bold",
        }}
        className="head"
      >
        Songs List
      </div>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Title</th>
            <th>Song Length</th>
            <th>Singer</th>
          </tr>
        </thead>
        {props.list.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.movie}</td>
                <td>{item.title}</td>
                <td>{item.songLength}</td>
                <td>{item.singer}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div>
        <input type="text" ref={textMovie} />
        Movie Name
      </div>
      <div>
        <input type="text" ref={textTitle} />
        Song Title
      </div>
      <div>
        <input type="text" ref={textSongLength} />
        Song Length
      </div>
      <div>
        <input type="text" ref={textSinger} />
        Singer
      </div>
      <div>
        <button type="submit" onClick={handleClick}>
          Add Song
        </button>
      </div>
    </div>
  );
}
