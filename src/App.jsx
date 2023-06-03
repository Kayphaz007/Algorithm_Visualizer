import { Route, Routes } from "react-router-dom";
import Home from "./HomeComponents/home";
import Sort from "./SortComponents/sort";

function App() {
  return (
      <Routes>
        <Route path="/sort" element={<Sort />} />
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
