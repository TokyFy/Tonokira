import React, { FunctionComponent } from "react";

interface OwnProps {}
type Props = OwnProps;

const Error: FunctionComponent<Props> = (props) => {
  return (
    <div className={"text-center px-2 w-full border border-dashed"}>
      <p>Sorry , something went wrong !</p>
    </div>
  );
};

export default Error;
