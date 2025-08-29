import React, {FunctionComponent, ReactNode} from "react";

interface props {
  children: ReactNode | String;
  onClick: () => void;
}

const Btn: FunctionComponent<props> = ({  children, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all font-medium text-sm"
    >
      {children}
    </button>
  );
};

export default Btn;
