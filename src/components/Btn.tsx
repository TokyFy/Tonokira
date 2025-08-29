import React, { FunctionComponent, ReactNode } from "react";

interface props {
  children: ReactNode | String;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Btn: FunctionComponent<props> = ({ children, onClick, variant = 'secondary' }) => {
  const baseClasses = variant === 'primary' ? 'spotify-btn-primary' : 'spotify-btn-secondary';
  
  return (
    <button 
      onClick={onClick} 
      className={baseClasses}
    >
      {children}
    </button>
  );
};

export default Btn;