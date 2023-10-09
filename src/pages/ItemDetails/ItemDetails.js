import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./ItemDetails.css";
import ProfileIMG from "../../assets/profile-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ItemDetails() {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchItemDetails = async () => {
      try {
        const itemDocRef = doc(db, "items", itemId);
        const itemDoc = await getDoc(itemDocRef);

        if (itemDoc.exists()) {
          setItemDetails(itemDoc.data());
        } else {
          console.error("Item not found");
        }
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };

  const togglePhoneNumber = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  return (
    <div className="item-details-container">
      <div className="ID-Section1">
        <div className="ID-img-section">
          {itemDetails ? (
            <img src={itemDetails.imageUrl} alt={itemDetails.title} />
          ) : (
            <Skeleton height={470} width={745} />
          )}
        </div>
        <div className="ID-Section2">
          <div className="ID-Profile">
            <div className="ID-Profile-Details">
              <img src={ProfileIMG} />
              <div className="ID-Profile-Account">
                <h4>Profile Name</h4>
                <p>account Created </p>
                <a href="#">
                  See Profile
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </div>
            </div>

            {showPhoneNumber ? (
              <div className="ID-PhoneNumber">
                <a href={`tel:${itemDetails.mobileNumber}`}>
                  <button>{itemDetails.mobileNumber}</button>
                </a>
              </div>
            ) : (
              <button onClick={togglePhoneNumber}>
                {showPhoneNumber ? "Hide Phone Number" : "Show Phone Number"}
              </button>
            )}
            <div className="ID-Chat">
              <button>Chat</button>
            </div>
          </div>
          <div className="ID-Location">
            <h2>Location</h2>
            {itemDetails ? (
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                {itemDetails.location}
              </p>
            ) : (
              <Skeleton width={300} />
            )}
          </div>
        </div>
      </div>
      <div className="ID-price">
        <h2>
          {itemDetails ? (
            <p>Rs {itemDetails.price}</p>
          ) : (
            <Skeleton width={250} height={20} />
          )}
        </h2>

        <h4>
          {itemDetails ? (
            <>
              <p>{itemDetails.title}</p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                {itemDetails.location}
              </p>
              <p>{formatDate(itemDetails.timestamp)}</p>
            </>
          ) : (
            <Skeleton width={400} count={3} />
          )}
        </h4>
      </div>

      <div className="ID-details">
        <h1>Details</h1>
        {itemDetails ? (
          <>
            <h4>
              <p>{itemDetails.title}</p>
            </h4>
            <h3>
              <p>{itemDetails.brand}</p>
            </h3>
            <h3>
              <>{itemDetails.condition}</>
            </h3>
            <h4>
              <p>Rs {itemDetails.price}</p>
            </h4>
          </>
        ) : (
          <Skeleton count={4} width={400} />
        )}
      </div>
      <div className="ID-description">
        <h2>Description</h2>
        {itemDetails ? (
          <p>{itemDetails.description}</p>
        ) : (
          <Skeleton count={3} />
        )}
      </div>
    </div>
  );
}

export default ItemDetails;
