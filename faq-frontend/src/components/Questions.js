import React from "react";
import "../components/questions.css";
const Questions = (props) => {
  return (
    <nav className="accordion arrows">
      <input type="radio" name="accordion" id={props.data.id} />
      <section className="box">
        <label className="box-title" htmlFor={props.data.id}>
          {props.data.soru}
        </label>
        <label className="box-close" htmlFor="acc-close"></label>
        <div className="box-content">{props.data.cevap}</div>
      </section>

      <input type="radio" name="accordion" id="acc-close" />
    </nav>
  );
};
export default Questions;
