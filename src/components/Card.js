import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <article>
        <header>
          <h2>{props.breed}</h2>
        </header>
        <img className="card-image" src={props.image} alt={props.breed} />
        <div className="content">
          <p>{props.description}</p>
        </div>
      </article>
    </div>
  );
}
