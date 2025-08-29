import React, {FunctionComponent} from "react";
import Search from "../../components/Search";
import {useNavigate} from "react-router-dom";
import Copyright from "../../components/Copyright";
import {Music, Headphones, Heart} from "lucide-react";


interface OwnProps {
}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate();

    const clickHandler = (str: string) => {
        if (!(str.trim() === "")) {
            navigate(`search?q=${str}`);
        }
    };

    return (
        <div className="p-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Find Your <span className="text-green-400">Lyrics</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                    Discover the words behind your favorite songs
                </p>
                <Search onClick={clickHandler}/>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/30 hover:bg-gray-700/30 transition-all">
                    <Music className="text-green-400 mb-4" size={32} />
                    <h3 className="text-white font-semibold mb-2">Instant Search</h3>
                    <p className="text-gray-400 text-sm">Find lyrics for any song in seconds</p>
                </div>
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/30 hover:bg-gray-700/30 transition-all">
                    <Headphones className="text-green-400 mb-4" size={32} />
                    <h3 className="text-white font-semibold mb-2">Artist Info</h3>
                    <p className="text-gray-400 text-sm">Explore popular songs from your favorite artists</p>
                </div>
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/30 hover:bg-gray-700/30 transition-all">
                    <Heart className="text-green-400 mb-4" size={32} />
                    <h3 className="text-white font-semibold mb-2">Save Favorites</h3>
                    <p className="text-gray-400 text-sm">Keep track of lyrics you love</p>
                </div>
            </div>
            
            <div className="text-center">
                <Copyright/>
            </div>
        </div>

    );
};
export default Home;
