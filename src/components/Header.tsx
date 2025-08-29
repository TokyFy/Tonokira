import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, User  } from "lucide-react";


const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="py-2 px-6">
      <div className="p-4 rounded-md w-max cursor-pointer bg-neutral-900 hover:bg-green-500">
           <ChevronLeft size={24}/> 
      </div>
    </header> 
  );
};

export default Header;