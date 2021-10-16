import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  faCompass,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

import "./SearchBar.css";
import postsList from "../../data";

const SearchBar = ({ searchPosts, setPosts }) => {
  /// Hooks: useState, useEffect, useContext
  const [inputValue, setInputValue] = useState("");
  console.log("input", inputValue);

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    searchPosts(inputValue);
  };

  const handleClearButton = (event) => {
    event.preventDefault();
    setInputValue("");
    //searchPosts(inputValue);
  };

  useEffect(() => {
    if (inputValue === "") {
      setPosts(postsList);
    }
    return;
  }, [inputValue, setPosts]);

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Submit</button>
        <button onClick={handleClearButton}>Clear</button>
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
