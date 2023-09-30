import React from "react";

export default function FilmsPresentation({ films }) {
  console.log(films);
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
              <button>Detail</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
