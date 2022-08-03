import "./App.css";
import "../src/components/Questions";
import "../src/components/Categories";
import React, { Fragment } from "react";
import Questions from "../src/components/Questions";
import Categories from "../src/components/Categories";
import { useState } from "react";

const App = () => {
  const [filterCategory, setFilterCategory] = useState(0);

  const data = [
    {
      id: 1,
      kategoriId: 1,
      soru: "Soru1",
      cevap: "cevap1",
    },
    {
      id: 2,
      kategoriId: 2,
      soru: "Soru2",
      cevap: "cevap2",
    },
    {
      id: 3,
      kategoriId: 3,
      soru: "Soru3",
      cevap: "cevap3",
    },
    {
      id: 4,
      kategoriId: 4,
      soru: "Soru4",
      cevap: "cevap4",
    },
    {
      id: 5,
      kategoriId: 5,
      soru: "Soru5",
      cevap: "cevap5",
    },
  ];
  const CategoryData = [
    {
      kategoriId: 1,
      kategoriName: "Ürünler",
    },
    {
      kategoriId: 2,
      kategoriName: "Sipariş",
    },
    {
      kategoriId: 3,
      kategoriName: "Satış",
    },
    {
      kategoriId: 4,
      kategoriName: "Entegrasyon",
    },
    {
      kategoriId: 5,
      kategoriName: "Bot",
    },
  ];
  return (
    <>
      <div className="body">
        <div className="header"></div>
        <div className="box2">
          <div className="box-title">
            <div>
              {CategoryData.map((kategoriData) => (
                <Fragment key={kategoriData.kategoriId}>
                  <Categories
                    CategoryData={kategoriData}
                    key={kategoriData.kategoriId}
                    onClick={() => setFilterCategory(kategoriData.kategoriId)}
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
        </div>
        <div>
          {filterCategory}

          <Questions
            data={
              filterCategory == 0
                ? data
                : data.filter((a) => a.kategoriId === filterCategory)
            }
          />
        </div>
      </div>
    </>
  );
};
export default App;
