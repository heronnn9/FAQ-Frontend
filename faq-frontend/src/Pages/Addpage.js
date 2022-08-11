import React from "react";
import "../Pages/addpage.css";
import { useState } from "react";
import axios from "axios";

const Addpage = () => {
  const [category, setCategory] = useState([]);
  const [question, setQuestion] = useState([]);
  const [questionDetail, setQuestionDetail] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [answerDetail, setAnswerDetail] = useState("");

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/Category").then((respo) => {
      setCategory(respo.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("https://localhost:8000/api/Question").then((respon) => {
      setQuestion(respon.data);
    });
  }, []);

  const addQuestion = (e) => {
    axios
      .post("http://localhost:8000/api/Question", {
        questionDetail: questionDetail,
        categoryId: parseInt(questionId),
        answerDetail: answerDetail,
      })
      .then((respo) => {
        console.log(respo.status);
        setQuestion([...question]);
      })
      .catch((err) => {
        console.log(err.response.status);
      });
    setQuestionDetail("");
    setAnswerDetail("");
    console.log(questionId);
  };

  return (
    <div>
      <div className="header"></div>
      <div className="Anadiv">
        <div className="AddSoru">
          <div className="Yazısı">Sorunuzu Ve Cevabızı Giriniz</div>
          <select
            name=""
            id=""
            className="selects"
            onChange={(e) => setQuestionId(e.target.value)}
          >
            {category.map((selected) => (
              <option key={selected.id} value={selected.id} id={"my-element"}>
                {selected.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="input"
            placeholder="Sorunuzu Giriniz"
            name=""
            id=""
            value={questionDetail}
            onChange={(e) => setQuestionDetail(e.target.value)}
          />

          <input
            type="text"
            className="input"
            placeholder="Cevabınızı Giriniz"
            name=""
            id=""
            value={answerDetail}
            onChange={(e) => setAnswerDetail(e.target.value)}
          />
          <button type="button" className="button-87" onClick={addQuestion}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default Addpage;
