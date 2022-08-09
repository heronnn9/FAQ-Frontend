import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Addpage from "./Pages/Addpage.js";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Addpage />}></Route>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
