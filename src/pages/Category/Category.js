import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const categoryOptions = [
  {
    label: "Mobiles",
    subcategories: [
      {
        label: "Accessories",
        subcategories: [
          "Chargers",
          "Screens",
          "Screen Protectors",
          "Mobile Stands",
          "Headphones",
          "Earphones",
          "Covers & Cases",
          "External Memory",
          "Other Accessories",
        ],
      },
      { label: "Tablets", subcategories: [] },
      { label: "Smart Watches", subcategories: [] },
    ],
  },
  {
    label: "Vehicles",
    subcategories: [
      { label: "Cars", subcategories: [] },
      { label: "Cars on Installments", subcategories: [] },
      { label: "Cars Accessories", subcategories: [] },
      { label: "Spare Parts", subcategories: [] },
      { label: "Buses, Vans & Trucks", subcategories: [] },
      { label: "Rickshaw & Chingchi", subcategories: [] },
      { label: "Other Vehicles", subcategories: [] },
      { label: "Boats", subcategories: [] },
      { label: "Tractors & Trailers", subcategories: [] },
    ],
  },
  {
    label: "Property for Sale",
    subcategories: [
      { label: "Land & Plots", subcategories: [] },
      { label: "Houses", subcategories: [] },
      { label: "Apartments & Flats", subcategories: [] },
      { label: "Shops - Offices - Commercial Space", subcategories: [] },
      { label: "Portions & Floors", subcategories: [] },
    ],
  },
  {
    label: "Property for Rent",
    subcategories: [
      { label: "Houses", subcategories: [] },
      { label: "Apartments & Flats", subcategories: [] },
      { label: "Shops - Offices - Commercial Space", subcategories: [] },
      { label: "Roommates & Paying Guests", subcategories: [] },
      { label: "Rooms", subcategories: [] },
      { label: "Vacation Rentals - Guest Houses", subcategories: [] },
      { label: "Land & Plot", subcategories: [] },
    ],
  },
  {
    label: "Electronics & Home Appliances",
    subcategories: [
      { label: "Computers & Accessories", subcategories: [] },
      { label: "TV - Video - Audio", subcategories: [] },
      { label: "Cameras & Accessories", subcategories: [] },
      { label: "Games & Entertainment", subcategories: [] },
      { label: "Kitchen Appliances", subcategories: [] },
      { label: "AC & Coolers", subcategories: [] },
      { label: "Fridges & Freezers", subcategories: [] },
      { label: "Washing Machines & Dryers", subcategories: [] },
    ],
  },
  {
    label: "Animals",
    subcategories: [
      { label: "Dogs", subcategories: [] },
      { label: "Horses", subcategories: [] },
      { label: "Ducks", subcategories: [] },
      { label: "Other Birds", subcategories: [] },
      { label: "Fertile Eggs", subcategories: [] },
      { label: "Fish", subcategories: [] },

      {
        label: "Livestock",
        subcategories: ["Camels", "Cows", "Goats", "Sheep", "Others"],
      },
      { label: "Pet Food & Accessories", subcategories: [] },
    ],
  },
  {
    label: "Furniture & Home Decor",
    subcategories: [
      { label: "Sofa & Chairs", subcategories: [] },
      { label: "Beds & Wardrobes", subcategories: [] },
      { label: "Tables & Dining", subcategories: [] },
      { label: "Rugs & Carpets", subcategories: [] },
      { label: "Curtains & Blinds", subcategories: [] },
      { label: "Office Furniture", subcategories: [] },
      { label: "Home Decoration", subcategories: [] },
      { label: "Other Household Items", subcategories: [] },
    ],
  },
  {
    label: "Fashion & Beauty",
    subcategories: [
      {
        label: "Fashion Accessories",
        subcategories: [
          "Caps",
          "Scarves",

          "Socks",
          "Gloves",
          "Cufflinks",
          "Sunglasses",
        ],
      },
      {
        label: "Clothes",
        subcategories: [
          "Eastern",
          "Western",
          "Hijabs & Abayas",
          "Sports Clothes",
          "Kids Clothes",
        ],
      },
      { label: "Footwear", subcategories: [] },
      { label: "Bags", subcategories: [] },
      { label: "Jewelry", subcategories: [] },
      { label: "Makeup", subcategories: [] },
      { label: "Skin & Hair", subcategories: [] },
      { label: "Watches", subcategories: [] },
      { label: "Fragrance", subcategories: [] },
      { label: "Other Fashion", subcategories: [] },
    ],
  },
  {
    label: "Books, Sports & Hobbies",
    subcategories: [
      {
        label: "Books & Magazines",
        subcategories: [
          "Books",
          "Magazines",
          "Dictionaries",
          "Stationery Items",
          "Calculators",
        ],
      },
      { label: "Musical Instruments", subcategories: [] },
      { label: "Sports Equipment", subcategories: [] },
      { label: "Gym & Fitness", subcategories: [] },
      { label: "Other Hobbies", subcategories: [] },
    ],
  },
  {
    label: "Kids",
    subcategories: [
      {
        label: "Kids Vehicles",
        subcategories: [
          "Kids Bikes",
          "Kids Cars",
          "Kids Cycles",
          "Kids Scooties",
        ],
      },
      { label: "Toys", subcategories: [] },
      { label: "Baby Gear", subcategories: [] },
      { label: "Bath & Diapers", subcategories: [] },
      { label: "Swings & Slides", subcategories: [] },
      { label: "Kids Clothing", subcategories: [] },
      { label: "Kids Accessories", subcategories: [] },
    ],
  },
];

const Category = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const [selectedSubcategory2, setSelectedSubcategory2] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("category", category.subcategories);
    setSelectedSubcategory("");
    setSelectedSubcategory2("");
  };
  const handleSubcategorySelect = (subcategory) => {
    console.log("selectedSubcategory", subcategory);
    setSelectedSubcategory(subcategory);
    setSelectedSubcategory2("");
  };

  const handleSubcategory2Select = (subcategory) => {
    setSelectedSubcategory2(subcategory);
  };

  const handleContinue = () => {
    if (selectedCategory) {
      navigate(`/add-item?category=${selectedCategory}`);
    }
  };

  return (
    <div className="category-title">
      <h2>POST YOUR AD</h2>
      <div className="category-container">
        <h3>CHOOSE A CATEGORY</h3>
        <div className="category-section">
          <ul className="category-ul ul-div1">
            {categoryOptions.map((category, ind) => (
              <li className="category-li" key={ind}>
                <button
                  onClick={() => handleCategorySelect(category.label)}
                  className={
                    selectedCategory === category.label ? "selected" : ""
                  }
                >
                  {category.label}
                  {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                </button>
              </li>
            ))}
          </ul>
          <ul className="category-ul ul-div2">
            {categoryOptions
              .find((category) => category.label === selectedCategory)
              ?.subcategories.map((subcategory) => (
                <li className="category-li" key={subcategory.label}>
                  <button
                    onClick={() => handleSubcategorySelect(subcategory.label)}
                    className={
                      selectedSubcategory === subcategory.label
                        ? "selected"
                        : ""
                    }
                  >
                    {subcategory.label}
                  </button>
                </li>
              ))}
          </ul>
          <ul className="category-ul ul-div3">
            {categoryOptions
              .find((category) => category.label === selectedCategory)
              ?.subcategories.find(
                (subcategory) => subcategory.label === selectedSubcategory
              )
              ?.subcategories.map((subcategory2) => (
                <li className="category-li" key={subcategory2}>
                  <button
                    onClick={() => handleSubcategory2Select(subcategory2)}
                    className={
                      selectedSubcategory2 === subcategory2 ? "selected" : ""
                    }
                  >
                    {subcategory2}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <button className="category-continue" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Category;
