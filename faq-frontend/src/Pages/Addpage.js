import React from "react";
import "../Pages/addpage.css";
import { useState } from "react";
import axios from "axios";

const Addpage = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [question, setQuestion] = useState([]);
  const [questionDetail, setQuestionDetail] = useState("");

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/Category").then((respo) => {
      setCategory(respo.data);
    });
  }, []);

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:8000/api/Category", { name: name })
      .then((respo) => {
        setCategory([...category, { id: 0, name: name }]);
      });
    setName("");
  };
  const addQuestion = (e) => {
    axios
      .post("https://localhost:8000/api/Question", {
        questionDetail: questionDetail,
      })
      .then((respo) => {
        setQuestion([...question, { id: 0, questionDetail: questionDetail }]);
      });
    setQuestionDetail("");
  };

  return (
    <div>
      <div className="header"></div>
      <div className="Anadiv">
        <div className="addKategori">
          <div className="Yazısı">Kategori Ekle</div>
          <input
            className="input"
            placeholder="Kategori Adı"
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="button-86" onClick={handleSubmit}>
            Add
          </button>
        </div>
        <div className="AddSoru">
          <div className="Yazısı">Soru Ekle</div>
          <select name="" id="" className="selects">
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
          <button type="submit" className="button-86" onClick={addQuestion}>
            Add
          </button>
        </div>
        <div className="AddCevap">
          <div className="Yazısı">Cevap Ekle</div>
        </div>
      </div>
    </div>
  );
};
export default Addpage;
