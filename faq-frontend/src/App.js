import "./App.css";
import "../src/components/Questions";
import "../src/components/Categories";
import React from "react";
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
  ];
  return (
    <>
      <div className="body">
        <div className="header">Sıkça Sorulan Sorular</div>
        <div className="box2">
          <div className="box-title">
            <div>
              {CategoryData.map((kategoriData) => (
                <Categories
                  CategoryData={kategoriData}
                  key={kategoriData.kategoriId}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          {data.map((expenseData) => (
            <Questions data={expenseData} key={expenseData.kategoriId} />
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
