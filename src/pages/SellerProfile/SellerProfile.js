import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import Cards from "../../components/Cards/Cards";
import profileIMG from "../../assets/profile-img.png";
import "./SellerProfile.css";
import { getAuth } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function SellerProfile() {
  const { uid } = useParams();
  const [sellerItems, setSellerItems] = useState([]);
  const [username, setUsername] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const location = useLocation();
  const currentURL = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchSellerItems = async () => {
      if (!uid) return;

      const itemsRef = collection(db, "items");
      const q = query(itemsRef, where("uid", "==", uid));

      try {
        const querySnapshot = await getDocs(q);
        const itemsData = [];
        querySnapshot.forEach((doc) => {
          const item = doc.data();
          item.itemId = doc.id;
          itemsData.push(item);
        });
        setSellerItems(itemsData);
      } catch (error) {
        console.error("Error fetching seller's items:", error);
      }
    };

    const auth = getAuth();

    if (uid) {
      const user = auth.currentUser;
      if (user) {
        setUsername(user.displayName);
      }
    }

    fetchSellerItems();
  }, [uid]);

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 4000);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <div className="seller-profile-container">
      <div className="seller-profile-info">
        <div>
          <div className="seller-profile-header">
            <img
              className="seller-profile-img"
              src={profileIMG}
              alt="Seller Profile"
            />
            <div className="seller-profile-details">
              <h4 className="seller-profile-stats">
                Published ads - {sellerItems.length}
              </h4>
            </div>
          </div>
          <div className="seller-profile-actions">
            <button className="share-button" onClick={handleCopyToClipboard}>
              <h4>
                {isCopied ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ fontSize: "18px", marginRight: "5px" }}
                    />
                    Copied to Clipboard
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon={faCopy}
                      style={{ fontSize: "18px", marginRight: "5px" }}
                    />
                    Share User Profile
                  </>
                )}
              </h4>
            </button>
            <div className="seller-link">
              <a href="#" className="report-link">
                Report User
              </a>
              <a href="#" className="block-link">
                Block User
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="seller-profile-items">
        <h3>{username}</h3>
        <div className="seller-profit-cards">
          {sellerItems.map((item) => (
            <div className="seller-cards">
              <Cards
                key={item.itemId}
                itemId={item.itemId}
                image={item.imageUrl}
                price={item.price}
                title={item.title}
                brand={item.brand}
                location={item.location}
                timestamp={item.timestamp}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerProfile;
