import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 bg-black/80 backdrop-blur-md">
    </header>
  );
};

export default Header;