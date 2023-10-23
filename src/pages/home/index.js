import React, { useState, useEffect } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import decor from "../../assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png";
import fashion from "../../assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png";
import kids from "../../assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png";
import book from "../../assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png";
import elec from "../../assets/car-electronic.png";
import house from "../../assets/car-house.png";
import rent from "../../assets/car-rent.png";
import animal from "../../assets/car-animal.png";
import circle from "../../assets/car-card.png";
import car from "../../assets/car-vehicle.png";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import { db } from "../../config/firebase";
import box from "../../assets/badge.png";
import AD from "../../assets/Olx-App-AD.webp";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import Cards from "../../components/Cards/Cards";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { CustomSkeleton } from "../../components/CustomSkeleton/CustomSkeleton";

function Home() {
  const [products, setProducts] = useState([]);
  // const limitedProducts = products.slice(0, 4);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "items");
        const productsSnapshot = await getDocs(productsRef);

        const productsData = [];
        productsSnapshot.forEach((doc) => {
          const productData = doc.data();
          productData.itemId = doc.id;
          productsData.push(productData);
        });

        setProducts(productsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const mobilePhoneProducts = products
    .slice(0, 8)
    .filter((product) => product.category === "Mobiles");
  // const bikesProducts = products
  //   .slice(0, 8)
  //   .filter((product) => product.category === "Vehicles");
  const housesProducts = products
    .slice(0, 8)
    .filter((product) => product.category === "Property for Sale");
  // const rentProducts = products
  //   .slice(0, 8)
  //   .filter((product) => product.category === "Property for Rent");
  // const homeAppliancesProducts = products
  //   .slice(0, 8)
  //   .filter((product) => product.category === "Electronics & Home Appliances");
  const animalProducts = products
    .slice(0, 8)
    .filter((product) => product.category === "Animals");
  // const decorProducts = products
  //   .slice(0, 8)
  //   .filter((product) => product.category === "Furniture & Home Decor");
  // const fashionProducts = products
  //   .slice(0, 8)
  //   .filter((product) => product.category === "Fashion & Beauty");
  // const hobbiesProducts = products
  //   .slice(0, 8)
  //   .filter((product) => product.category === "Books, Sports & Hobbies");

  const kidsProducts = products
    .slice(0, 8)
    .filter((product) => product.category === "Kids");

  const updateCollection = async (itemId, newData) => {
    const itemDocRef = doc(db, "items", itemId);

    try {
      await updateDoc(itemDocRef, newData);
      console.log("Document updated successfully!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <div className="container">
      <div>
        <div className="ad-area">
          <Banner />
        </div>
      </div>
      <div className="cat-area">
        <h2>All categories</h2>
        <div className="cat-card-area">
          <div className="cat-card">
            <Link to={`/ViewMore?category=Mobiles`}>
              <img src={circle} alt="Mobiles" />
            </Link>
            <h4>Mobiles</h4>
          </div>
          <div className="cat-card">
            <Link to={`/ViewMore?category=Vehicles`}>
              <img src={car} alt="Mobiles" />
            </Link>
            <h4>vehicles</h4>
          </div>
          <div className="cat-card">
            <Link to={`/ViewMore?category=Property for Sale`}>
              <img src={house} alt="Mobiles" />
            </Link>
            <h4>Property For Sale</h4>
          </div>
          <div className="cat-card">
            <Link to={`/ViewMore?category=Property for Rent`}>
              <img src={rent} alt="Mobiles" />
            </Link>
            <h4>Property For Rent</h4>
          </div>
          <div className="cat-card">
            <Link to={`/ViewMore?category=Electronics & Home Appliances`}>
              <img src={elec} alt="Mobiles" />
            </Link>
            <h4>Electronice Appliances</h4>
          </div>
          <div className="cat-card">
            <Link to={`/ViewMore?category=Animals`}>
              <img src={animal} alt="Mobiles" />
            </Link>
            <h4>Animals</h4>
          </div>
          <div className="cat-card">
            <Link to={`/ViewMore?category=Furniture & Home Decor`}>
              <img src={decor} alt="Mobiles" />
            </Link>
            <h4>Furniture & Home Decor</h4>
          </div>
          <div className="cat-card">
            <Link to={`/ViewMore?category=Fashion & Beauty`}>
              <img src={fashion} alt="Mobiles" />
            </Link>
            <h4>Fashion & Beauty</h4>
          </div>
          <div className="cat-card">
            <Link to={`/ViewMore?category=Books, Sports & Hobbies`}>
              <img src={book} alt="Mobiles" />
            </Link>
            <h4>Books, Sports & Hobbies</h4>
          </div>
          <div className="cat-card">
            <Link to={`/ViewMore?category=Kids`}>
              <img src={kids} alt="Mobiles" />
            </Link>
            <h4>Kids</h4>
          </div>
        </div>
      </div>

      <div className="Mobile-area">
        <div className="Mobile-area-title">
          <h2>Mobile Phone</h2>
          <p>
            <Link to={`/ViewMore?category=Mobiles`}>
              View more
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "blue", margin: "0 0 0 5px" }}
              />
            </Link>
          </p>
        </div>

        <div className="Product-List-area">
          {isLoading ? (
            <CustomSkeleton />
          ) : (
            mobilePhoneProducts.map((product, index) => (
              <Cards
                key={index}
                itemId={product.itemId}
                image={product.imageUrl}
                price={product.price}
                title={product.title}
                brand={product.brand}
                timestamp={product.timestamp}
              />
            ))
          )}
        </div>
      </div>
      <div className="Mobile-area">
        <div className="Mobile-area-title">
          <h2>House for Sale</h2>
          <p>
            <Link to={`/ViewMore?category=Property for Sale`}>
              View more
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "blue", margin: "0 0 0 5px" }}
              />
            </Link>
          </p>
        </div>

        <div className="Product-List-area">
          {isLoading ? (
            <CustomSkeleton />
          ) : (
            housesProducts.map((product, index) => (
              <Cards
                key={index}
                itemId={product.itemId}
                image={product.imageUrl}
                price={product.price}
                title={product.title}
                brand={product.brand}
                timestamp={product.timestamp}
              />
            ))
          )}
        </div>
      </div>
      <div className="Mobile-area">
        <div className="Mobile-area-title">
          <h2>Animals</h2>
          <p>
            <Link to={`/ViewMore?category=Animals`}>
              View more
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "blue", margin: "0 0 0 5px" }}
              />
            </Link>
          </p>
        </div>

        <div className="Product-List-area">
          {isLoading ? (
            <CustomSkeleton />
          ) : (
            animalProducts.map((product, index) => (
              <Cards
                key={index}
                itemId={product.itemId}
                image={product.imageUrl}
                price={product.price}
                title={product.title}
                brand={product.brand}
                timestamp={product.timestamp}
              />
            ))
          )}
        </div>
      </div>
      <div className="Mobile-area">
        <div className="Mobile-area-title">
          <h2>Kids Products</h2>
          <p>
            <Link to={`/ViewMore?category=Kids`}>
              View more
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "blue", margin: "0 0 0 5px" }}
              />
            </Link>
          </p>
        </div>

        <div className="Product-List-area">
          {kidsProducts.map((product, index) => (
            <Cards
              key={index}
              itemId={product.itemId}
              image={product.imageUrl}
              price={product.price}
              title={product.title}
              brand={product.brand}
              timestamp={product.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="AD-content AD-content-Section">
        <div>
          <img src={AD} alt="OLX App" />
        </div>
        <div className="AD-content-Section">
          <h2>TRY THE OLX APP</h2>
          <br />
          <h4>
            Buy, sell and find just about anything using the app on your mobile.
          </h4>
        </div>
        <div className="AD-content-Section">
          <h5>GET YOUR APP TODAY</h5>
          <div className="AD-Box">
            <a href="https://play.google.com/store/games">
              <img src={box} alt="Box" />
            </a>
            <a href="https://play.google.com/store/games">
              <img src={box} alt="Box" />
            </a>
            <a href="https://play.google.com/store/games">
              <img src={box} alt="Box" />
            </a>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}

export default Home;
