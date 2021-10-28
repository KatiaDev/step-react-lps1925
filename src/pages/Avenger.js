import React from "react";
import { useParams, useHistory } from "react-router";

const Avenger = ({ avengersList }) => {
  const params = useParams();
  const history = useHistory();

  const foundAvenger = avengersList.find((avenger) => {
    return String(avenger.id) === params.avengerId;
  });

  console.log("foundAvenger", foundAvenger);

  return (
    <div className="character-info-wrapper">
      <button onClick={() => history.goBack()}>Go Back</button>
      <div>
        <h1>{foundAvenger.name}</h1>
        <h2>{foundAvenger.nickname}</h2>
        <p>{foundAvenger.description}</p>
        <img
          src={foundAvenger.img}
          alt="random avengers img"
          className="character-image"
        />
        <ul style={{ listStyle: "none" }}>
          <strong>Movies:</strong>
          {foundAvenger.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Avenger;
