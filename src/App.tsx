import { Row } from "./components/layout/Layout";
import Header from "./components/Header/Header";
import Quotes from "./components/Quotes/Quotes";
import Search from "./components/Search/Search";
import Copyright from "./components/Copyright/Copyright";

function App() {
  return (
    <Row>
      <div className="App">
        <Header />
        <Quotes />
        <Search />
        <Copyright />
      </div>
    </Row>
  );
}
export default App;
