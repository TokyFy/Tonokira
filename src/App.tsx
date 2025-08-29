import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Result from "./Page/Result/Result";
import Lyrics from "./Page/Lyrics/Lyrics";
import Artist from "./Page/Artist/Artist";

function App() {
  return (
    <div className="bg-black min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 mx-60">
        <div className="bg-gradient-to-b from-gray-800/20 to-black min-h-screen">
          <Header />
          <main className="pb-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="search" element={<Result />} />
              <Route path="lyrics/:id" element={<Lyrics />} />
              <Route path="artist/:id" element={<Artist />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;