import React from "react";
import "../components/questions.css";
const Questions = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <nav className="accordion arrows" key={item.id}>
          <input type="radio" name="accordion" id={item.id} />
          <section className="box">
            <label className="box-title" htmlFor={item.id}>
              {item.soru}
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content">{item.cevap}</div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      ))}
    </>
  );
};
export default Questions;
