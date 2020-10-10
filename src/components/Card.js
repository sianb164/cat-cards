import React from "react";
import "./Card.css";

export default function Card(props) {
  function handleClick() {
    if (!props.click) {
      return;
    }

    props.click();
  }
  return (
    <div className="Card" onClick={handleClick}>
      <article>
        <header>
          <small>Click to shuffle breed</small>
          <h2>{props.breed}</h2>
        </header>
        <img className="card-image" src={props.image} alt={props.breed} />
        <div className="content">
          <p>{props.description}</p>
        </div>
        <footer>
          <small>
            {" "}
            <a
              href="https://github.com/sianb164/cat-cards"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code{" "}
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/sian-burgess-08733b90/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siân Burgess{" "}
            </a>
          </small>
        </footer>
      </article>
    </div>
  );
}
