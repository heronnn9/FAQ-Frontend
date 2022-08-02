import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
const Categories = (props) => {
  const { onClick } = props;
  return (
    <>
      <button type="button" className="button-85" onClick={onClick}>
        {props.CategoryData.kategoriName}{" "}
      </button>
    </>
  );
};
export default Categories;
