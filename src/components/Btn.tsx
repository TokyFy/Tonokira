import React, {FunctionComponent, ReactNode} from "react";

interface props {
  children: ReactNode | String;
  onClick: () => void;
}

const Btn: FunctionComponent<props> = ({  children, onClick }) => {
  return (
    <div onClick={onClick} className={"w-max font-bold text-[12px] border-b border-neutral-400 text-neutral-500 cursor-pointer border-dashed hover:border-neutral-800 hover:text-neutral-800 dark:text-neutral-200 dark:hover:border-neutral-200"}>
      {children}
    </div>
  );
};

export default Btn;
