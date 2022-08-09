import React from "react";

const TestX = (props) => {
  return (
    <ol style={{ backgroundColor: "red" }}>
      {props.category.map((kategori) => {
        return <li>{kategori.name}</li>;
      })}
    </ol>
  );
};

export default TestX;
