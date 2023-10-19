import React, { FunctionComponent } from "react";

interface props {
  value: String;
  onClick: () => void;
}

const Btn: FunctionComponent<props> = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className={"border-2 w-max py-1 px-2 font-bold text-[12px] border-neutral-300 rounded-lg text-neutral-500 cursor-pointer hover:border-purple-400 hover:text-neutral-800"}>
      {value}
    </div>
  );
};

export default Btn;
