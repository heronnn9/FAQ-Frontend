import "./App.css";
import "../src/components/Questions";
import "../src/components/Categories";
import React, { Fragment } from "react";
import Questions from "../src/components/Questions";
import Categories from "../src/components/Categories";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const App = () => {
  const [filterCategory, setFilterCategory] = useState(0);
  const [category, setCategory] = useState([]);
  const [answer, setAnswer] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/Answer").then((resp) => {
      setAnswer(resp.data);
    });
  }, []);
  React.useEffect(() => {
    axios.get("http://localhost:8000/api/Category").then((respo) => {
      setCategory(respo.data);
    });
  }, []);
  //Scope nedir ?

  return (
    <>
      <div className="body">
        <div className="header"></div>
        <div className="box2">
          <div className="box-title">
            <div>
              {category.map((kategoriData) => (
                <Fragment key={kategoriData.id}>
                  <Categories
                    category={kategoriData}
                    key={kategoriData.id}
                    onClick={() => setFilterCategory(kategoriData.id)}
                  />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="allQuestions">
            <button
              className="button-86"
              value={0}
              key={0}
              onClick={(e) => setFilterCategory(e.target.value)}
            >
              Tüm Sorular
            </button>
          </div>
          <Link to="/test" className="button-86">
            NextPage
          </Link>
        </div>
        <div>
          {
            <Questions
              answer={
                filterCategory.toString() === "0"
                  ? answer
                  : answer.filter(
                      (a) => a.question.category.id === filterCategory
                    )
              }
            />
          }
        </div>
      </div>
    </>
  );
};
export default App;
