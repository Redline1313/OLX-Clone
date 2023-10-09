import React from "react";
import "./Card2.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Card2 = ({ itemId, image, price, title, brand, timestamp, location }) => {
  const formatDate = (timestamp) => {
    if (timestamp && timestamp.seconds) {
      const date = new Date(timestamp.seconds * 1000);
      return date.toLocaleString();
    } else {
      return "Timestamp not available";
    }
  };

  return (
    <div className="card2">
      <Link to={`/item/${itemId}`} className="card2-link">
        <div className="card2-box">
          <img className="card2-image" src={image} alt={title} />
          <div className="card2-content">
            <p className="card2-price">Rs {price}</p>
            <p className="card2-name">{title}</p>
            <p className="card2-brand">{brand}</p>
            <br />
            <p>{location}</p>

            <p className="card2-timestamp"> {formatDate(timestamp)}</p>
            <button className="card2-call-button">
              <FontAwesomeIcon icon={faPhone} />
              Call
            </button>
            <button className="card2-chat-button">
              <FontAwesomeIcon icon={faComment} style={{ color: "#fafafa" }} />
              Chat
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card2;
