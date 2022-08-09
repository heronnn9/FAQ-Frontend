import React from "react";
import "./Categories.css";
const Categories = (props) => {
  const { onClick } = props;
  return (
    <>
      <button type="button" className="button-85" onClick={onClick}>
        {props.category.name}{" "}
      </button>
    </>
  );
};
export default Categories;
