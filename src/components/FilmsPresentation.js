import React, { useState } from "react";

export default function FilmsPresentation({ films }) {
  const [filmDetails, setFilmDetails] = useState([...films]);
  return (
    <div className="container">
      {films.map((film) => (
        <div className="column" key={film.id}>
          <div className="card">
            <img src={film.image} alt={film.title} />
            <h3>{film.title}</h3>
            <span className="title">{film.nation}</span> -{" "}
            <span>{film.year}</span>
            <p>
              <button
                onClick={() => {
                  setFilmDetails(film);
                }}
              >
                <a href="#popup1" id="openPopUp">
                  Detail
                </a>
              </button>
            </p>
          </div>
        </div>
      ))}

      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={filmDetails.image} alt={filmDetails.title} />
          <h2>{filmDetails.title}</h2>
          <span className="title">{filmDetails.nation}</span> -{" "}
          <span>{filmDetails.year}</span>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">
            <p>{filmDetails.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
