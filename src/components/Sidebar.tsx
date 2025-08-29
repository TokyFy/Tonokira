import React, { FunctionComponent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Search, Library, Plus, Heart, Music } from "lucide-react";

const Sidebar: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/search" },
  ];

  const libraryItems = [
    { icon: Plus, label: "Create Playlist" },
    { icon: Heart, label: "Liked Songs" },
  ];

  return (
    <div className="hidden md:flex flex-col w-60 bg-black h-screen fixed left-0 top-0 z-10">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Music size={32} className="text-white" />
          <span className="text-white text-2xl font-bold">Lirikisa</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-4 w-full p-3 rounded-md text-left transition-colors ${
                  location.pathname === item.path
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <item.icon size={24} />
                <span className="font-semibold">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Library Section */}
      <div className="mt-8 px-3">
        <div className="flex items-center justify-between px-3 mb-4">
          <button className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
            <Library size={24} />
            <span className="font-semibold">Your Library</span>
          </button>
          <Plus size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
        
        <ul className="space-y-2">
          {libraryItems.map((item, index) => (
            <li key={index}>
              <button className="flex items-center gap-4 w-full p-3 rounded-md text-left text-gray-400 hover:text-white transition-colors">
                <item.icon size={24} />
                <span className="font-semibold">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom spacing */}
      <div className="flex-1"></div>
    </div>
  );
};

export default Sidebar;