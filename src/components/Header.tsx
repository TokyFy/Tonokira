import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 bg-black/80 backdrop-blur-md">
      <div className="flex items-center justify-between p-4">
        {/* Navigation arrows */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.history.back()}
            className="w-8 h-8 bg-black/70 hover:bg-black rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={18} className="text-white" />
          </button>
          <button 
            onClick={() => window.history.forward()}
            className="w-8 h-8 bg-black/70 hover:bg-black rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>

        {/* User profile */}
        <div className="flex items-center gap-4">
          <button className="spotify-btn-secondary text-sm">
            Upgrade
          </button>
          <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
            <User size={16} className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;