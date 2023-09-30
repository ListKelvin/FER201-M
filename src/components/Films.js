import React, { useState } from "react";

import { Films } from "../ListOfFilms";
export default function Film() {
  const [film, setFilm] = useState([]);
  return (
    <div className="container">
      {Films.map((film) => (
        <div className="column">
          <div className="card">
            <img src={film.image} alt={film.title} />
            <h3>{film.title}</h3>
            <p className="title">{film.nation}</p> - <span>{film.year}</span>
            <p>
              <button
                onClick={() => {
                  setFilm(film);
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
          <img src={film.image} alt={film.title} />
          <h2>{film.title}</h2>
          <p className="title">{film.nation}</p> - <span>{film.year}</span>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">
            <p>{film.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
