import React from "react";
import "../components/questions.css";
const Questions = (props) => {
  const { answer } = props;
  return (
    <>
      {answer.map((item) => {
        return (
          <div>
            <nav className="accordion arrows" key={item.id}>
              {/* <div className="box-title2">{item.answers}</div> */}
              <input type="radio" name="accordion" id={item.id} />
              <section className="box">
                <label className="box-title" htmlFor={item.id}>
                  {item.questionDetail}
                </label>
                <label className="box-close" htmlFor="acc-close"></label>

                <div className="box-content">{item.answerDetail}</div>
              </section>
              <input type="radio" name="accordion" id="acc-close" />
            </nav>
          </div>
        );
      })}
    </>
  );
};
export default Questions;
