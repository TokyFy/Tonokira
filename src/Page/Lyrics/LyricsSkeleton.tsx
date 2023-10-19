import React, { FunctionComponent } from "react";

const LyricsSkeleton: FunctionComponent = () => {
  return (
    <div className={"py-8 flex flex-col gap-3 items-center"}>
      {[...Array(20)].map((value, index) => (
        <div className="w-64 h-3 bg-neutral-200 max-w-full" key={index}></div>
      ))}
    </div>
  );
};

export default LyricsSkeleton;
