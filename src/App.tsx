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
    <Row>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Result />} />
          <Route path="lyrics/:id" element={<Lyrics />} />
          <Route path="artist/:id" element={<Artist />} />
        </Routes>
        <Copyright />
      </div>
    </Row>
  );
}

export default App;
