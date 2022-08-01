import React from "react";
import "../components/questions.css";
const Questions = () => {
  return (
    <nav class="accordion arrows">
      <input type="radio" name="accordion" id="cb1" />
      <section class="box">
        <label class="box-title" for="cb1">
          Readme
        </label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
          Click on an item to open. Click on its header or the list header to
          close.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb2" />

      <input type="radio" name="accordion" id="acc-close" />
    </nav>
  );
};
export default Questions;
