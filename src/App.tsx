import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Result from "./Page/Result/Result";
import Lyrics from "./Page/Lyrics/Lyrics";
import Artist from "./Page/Artist/Artist";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Header />
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Result />} />
            <Route path="lyrics/:id" element={<Lyrics />} />
            <Route path="artist/:id" element={<Artist />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
