import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./ViewMore.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import Card2 from "../../components/Card2/Card2";
import Cards from "../../components/Cards/Cards";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import "react-loading-skeleton/dist/skeleton.css";
import CustomSkeleton2 from "../../components/CustomSkeleton/CustomSkeleton2";
import { useLocation } from "react-router-dom";

const ViewMore = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("Newly listed");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [displayCard2, setDisplayCard2] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

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
  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortBy(selectedSortOption);

    const sortedProducts = [...products];

    if (selectedSortOption === "Newly listed") {
      sortedProducts.sort((a, b) => b.timestamp - a.timestamp);
    } else if (selectedSortOption === "Lowest price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === "Highest price") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  const filterProductsByPrice = () => {
    return products.filter((product) => {
      const productPrice = parseFloat(product.price);
      return productPrice >= minPrice && productPrice <= maxPrice;
    });
  };

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(parseFloat(value));
    } else if (name === "maxPrice") {
      setMaxPrice(parseFloat(value));
    }
  };
  const toggleDisplayCard2 = () => {
    setDisplayCard2(!displayCard2);
  };

  // const filteredProducts = filterProductsByPrice();
  // debugger;
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <div className="ViewMore-Wrapper">
      <h2>Mobile Phones in Pakistan</h2>

      <div className="Container-ViewMore">
        <div className="Sidebar">
          Filter
          <div className="line"></div>
          <div className="box-Categories">
            <h3>Categories</h3>
            <ul>
              <a href="#"> All Categories</a>
              <li>
                <a href="">Mobiles</a>
                <a href="#">
                  <li>Mobile Phone</li>
                </a>
                <a href="#">
                  <li>Accessories</li>
                </a>
                <a href="#">
                  <li>Smart Watches</li>
                </a>
                <a href="#">
                  <li>Tablets</li>
                </a>
              </li>
            </ul>
          </div>
          <div className="line"></div>
          <h3>LOCATION</h3>
          <div className="box-location">
            <select className="select-input" name="" id="">
              <option value="khi">Karachi</option>
              <option value="fsd">Faisalabad</option>
              <option value="lhr">Lahore</option>
              <option value="Isl">Islamabad</option>
            </select>
          </div>
          <div className="box-price">
            <h3>PRICE</h3>
            <p>Min Price: Rs {minPrice}</p>
            <p>Max Price: Rs {maxPrice}</p>
            <input
              type="range"
              name="minPrice"
              value={minPrice}
              onChange={handlePriceRangeChange}
              min="0"
              max="1000000"
            />
            <input
              type="range"
              name="maxPrice"
              value={maxPrice}
              onChange={handlePriceRangeChange}
              min="0"
              max="1000000"
            />
          </div>
          {/* <div className="line"></div>
          <div className="box-Brand">
            <h3>BRAND</h3>
          </div>
          <div className="line"></div>
          <div className="box-Condition">
            <h3>CONDITION</h3>
          </div> */}
          <div className="line"></div>
          <div className="box-Sell">
            <a href="/add-item">
              <h4>Want to see your stuff here?</h4>
              <p>
                Make some extra cash by selling things in your community. Go on,
                it's quick and easy.
              </p>
              <button>Sell</button>
            </a>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="Main-Section">
          <div className="Main-top-bar">
            <div className="Main-top-bar-ads">
              <p>10,000+ ads</p>
            </div>
            <div className="Main-top-bar left-bar">
              <p>view</p>
              <div
                className="sort-icon bars"
                onClick={() => toggleDisplayCard2()}
              >
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div
                className="sort-icon figma"
                onClick={() => toggleDisplayCard2()}
              >
                <FontAwesomeIcon icon={faFigma} />
              </div>
              <p>sort by:</p>
              <select value={sortBy} onChange={handleSortChange}>
                <option value="Newly listed">
                  <p>Newly listed</p>
                </option>
                <option value="Lowest price">Lowest price</option>
                <option value="Highest price">Highest price</option>
              </select>
            </div>
          </div>
          <div className="line"></div>
          <div className="Display-Cards">
            {isLoading
              ? Array.from({ length: 10 }, (_, index) => (
                  <div key={index} className="Card-Skeleton">
                    <CustomSkeleton2 />
                  </div>
                ))
              : displayCard2
              ? filteredProducts.map((product, index) => (
                  <Card2
                    key={index}
                    itemId={product.itemId}
                    image={product.imageUrl}
                    price={product.price}
                    title={product.title}
                    brand={product.brand}
                    location={product.location}
                    timestamp={product.timestamp}
                  />
                ))
              : filteredProducts.map((product, index) => (
                  <div className="Display-Cards2">
                    <Cards
                      key={index}
                      itemId={product.itemId}
                      image={product.imageUrl}
                      price={product.price}
                      title={product.title}
                      brand={product.brand}
                      location={product.location}
                      timestamp={product.timestamp}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default ViewMore;
