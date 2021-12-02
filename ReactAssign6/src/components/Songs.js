import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";

export default function Songs() {
  const [data, setData] = useState(null);

  const [display, setDisplay] = useState(true);

  const handleAddSongClick = () => {
    setDisplay(false);
  };

  let navigate = useNavigate();

  const initialValues = {
    movie: "",
    title: "",
    songLength: "",
    singer: "",
  };

  const onSubmit = (values) => {
    values.id = data.length + 1;
    setData([...data, values]);
    console.log(values);
    setDisplay(true);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.movie) {
      errors.movie = "required!";
    }
    if (!values.title) {
      errors.title = "required!";
    }
    if (!values.songLength) {
      errors.songLength = "required!";
    }
    if (!values.singer) {
      errors.singer = "required!";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  useEffect(() => {
    fetch("http://localhost:8000/songs")
      .then((res) => {
        return res.json();
      })
      .then((dt) => {
        setData(dt);
      });
  }, []);

  useEffect(() => {
    const confirmExit = (e) => {
      const leaveThisPage = window.confirm(
        "Would you like to leave this page?"
      );
      if (leaveThisPage) {
        navigate("/songs");
      } else {
        navigate("/songs");
        document.getElementById("addNewSong").click();
      }
    };
    window.addEventListener("popstate", confirmExit);
    return () => {
      window.removeEventListener("popstate", confirmExit);
    };
  }, [navigate]);

  return (
    <div>
      {display ? (
        <div>
          <div
            style={{ color: "blue", marginLeft: "20px", fontWeight: "bold" }}
          >
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
                      <td>
                        <Link to={`/songs/${d.id}`}>{d.title}</Link>
                      </td>
                      <td>{d.songLength}</td>
                      <td>{d.singer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <button
            style={{ marginLeft: "30px" }}
            type="submit"
            id="addNewSong"
            onClick={handleAddSongClick}
          >
            Add a New Song
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="movie">Movie</label>
              <input
                type="text"
                name="movie"
                id="movie"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.movie}
              />
              {formik.touched.movie && formik.errors.movie ? (
                <div style={{ color: "red" }}>{formik.errors.movie}</div>
              ) : null}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title ? (
                <div style={{ color: "red" }}>{formik.errors.title}</div>
              ) : null}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="songLength">Length</label>
              <input
                type="text"
                name="songLength"
                id="songLength"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.songLength}
              />
              {formik.touched.songLength && formik.errors.songLength ? (
                <div style={{ color: "red" }}>{formik.errors.songLength}</div>
              ) : null}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="singer">Singer</label>
              <input
                type="text"
                name="singer"
                id="singer"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.singer}
              />
              {formik.touched.singer && formik.errors.singer ? (
                <div style={{ color: "red" }}>{formik.errors.singer}</div>
              ) : null}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
