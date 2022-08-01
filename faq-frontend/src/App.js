import "./App.css";
import "../src/components/Questions";
import React from "react";
import Questions from "../src/components/Questions";

const App = () => {
  return (
    <body className="body">
      <div className="header">FAQ</div>
      <header class="box2">
        <label for="acc-close" class="box-title">
          Sıkça Sorulan Sorular
        </label>
      </header>
      <Questions></Questions>
      <Questions></Questions>
      <Questions></Questions>
      <Questions></Questions>
    </body>
  );
};
export default App;
