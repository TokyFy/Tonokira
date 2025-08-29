import React, { FunctionComponent } from "react";
import Search from "../../components/Search";
import { useNavigate } from "react-router-dom";
import Copyright from "../../components/Copyright";
import { Music, TrendingUp, Clock } from "lucide-react";

interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();

  const clickHandler = (str: string) => {
    if (!(str.trim() === "")) {
      navigate(`search?q=${str}`);
    }
  };

  const quickSearches = [
    "Taylor Swift",
    "The Weeknd", 
    "Billie Eilish",
    "Drake",
    "Ariana Grande",
    "Ed Sheeran"
  ];

  return (
    <div className="px-6 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-6xl font-black text-white mb-4">
          Good evening
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Find lyrics for your favorite songs
        </p>
        <Search onClick={clickHandler} />
      </div>

      {/* Footer */}
      <div className="text-center pt-8 border-t border-gray-800">
        <Copyright />
      </div>
    </div>
  );
};

export default Home;