import { Row } from "./components/layout/Layout";
import Header from "./components/Header/Header";
import Copyright from "./components/Copyright/Copyright";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Result from "./Page/Result/Result";
import Lyrics from "./Page/Lyrics/Lyrics";
import Artist from "./Page/Artist/Artist";

function App() {
  return (
    <div className="flex p-6">
      <div className="w-full max-w-lg mx-auto bg-white p-4 rounded-md">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Result />} />
          <Route path="lyrics/:id" element={<Lyrics />} />
          <Route path="artist/:id" element={<Artist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
