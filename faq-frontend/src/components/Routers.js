import App from "../App";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Categories from "./Categories";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/category/:kategoriId" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
