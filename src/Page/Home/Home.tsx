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

      {/* Quick Access Cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Made for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickSearches.map((artist, index) => (
            <div
              key={index}
              onClick={() => clickHandler(artist)}
              className="spotify-card group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center">
                  <Music size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{artist}</h3>
                  <p className="text-gray-400 text-sm">Artist</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Recently played</h2>
          <button className="text-gray-400 hover:text-white text-sm font-bold transition-colors">
            Show all
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="spotify-card group">
              <div className="aspect-square bg-gray-700 rounded-lg mb-4 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                  <Music size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-white font-bold text-sm mb-1 truncate">Liked Songs</h3>
              <p className="text-gray-400 text-xs">Playlist</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="text-center pt-8 border-t border-gray-800">
        <Copyright />
      </div>
    </div>
  );
};

export default Home;