import React from "react";

import { Films } from "../ListOfFilms";
export default function Film() {
  return (
    <div className="container">
      {Films.map((film) => (
        <div className="column">
          <div className="card">
            <img src={film.image} alt={film.title} />
            <h3>{film.title}</h3>
            <p className="title">{film.nation}</p> - <span>{film.year}</span>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
