import React from "react";
import "./Categories.css";
const Categories = (props) => {
  return (
    <a href={`/${props.CategoryData.kategoriId} `}>
      <button
        className="button-85"
        onClick={(e) => props.setFilterCategory(e.target.kategoriId)}
      >
        {props.CategoryData.kategoriName}
      </button>
    </a>
  );
};
export default Categories;
