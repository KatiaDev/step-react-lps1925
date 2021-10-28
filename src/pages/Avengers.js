import React from "react";
import { Link } from "react-router-dom";

const Avengers = ({ avengersList }) => {
  return (
    <div>
      <h1>Avengers</h1>

      {avengersList.map((avenger) => {
        return (
          <div className="characters-list-wrapper" key={avenger.id}>
            <Link to={`/avengers/${avenger.id}`}>
              <div className="character-card">
                <p>{avenger.name}</p>
                <img src={avenger.thumbnail} alt="avenger avatar" />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Avengers;
