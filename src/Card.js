import React from "react";
import "./Card.css"; // Import the CSS file

const Card = () => {
  return (
    <div className="card-container">
      {/* Your card content goes here */}
      <div className="card1">
        <h4>Card 01</h4>
        <hr></hr>
        <p>
          Some quick example text to build on the card title and make up the bulk of the
          card's content
        </p>
      </div>
      <div className="card2">
        <h4>Card 02</h4>
        <hr></hr>
        <p>
          Some quick example text to build title and make up the bulk of the
          card's content
        </p>
      </div>
      <div className="card3">
        <h4>Card 03</h4>
        <hr></hr>
        <p>
          Some quick example text to build title and make up the bulk of the
          card's content
        </p>
      </div>
    </div>
  );
};

export default Card;
