import { useParams } from "react-router-dom";
import { Films } from "../ListOfFilms";

export default function Detail() {
  const { id } = useParams();
  const film = Films.find((obj) => {
    return obj.id === id;
  });

  return (
    <div className="detail">
      <div className="product-card">
        <div className="badge">{film.title}</div>
        <div className="product-tumb">
          <img src={`${film.image}`} alt={film.title} />
        </div>
        <div className="product-details">
          <h4>{film.nation}</h4>
          <div className="product-price">year: {film.year}</div>
          <p>{film.detail}</p>
          <div className="product-bottom-details"></div>
        </div>
      </div>
    </div>
  );
}
