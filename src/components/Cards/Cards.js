import React from "react";
import "./Cards.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Cards = ({ itemId, image, price, title, brand, timestamp }) => {
  const formatDate = (timestamp) => {
    if (timestamp && timestamp.seconds) {
      const date = new Date(timestamp.seconds * 1000);
      return date.toLocaleString();
    } else {
      return "Timestamp not available";
    }
  };

  return (
    <div className="card">
      <Link to={`/item/${itemId}`} className="card-link">
        <img className="card-image" src={image} alt={title} />
        <div className="card-content">
          <p className="card-price">Rs {price}</p>
          <p className="card-name">{title}</p>
          <p className="card-brand">{brand}</p>
          <p className="card-timestamp"> {formatDate(timestamp)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
