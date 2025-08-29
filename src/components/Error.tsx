import React, { FunctionComponent } from "react";
import {AlertCircle} from "lucide-react";

interface OwnProps {}
type Props = OwnProps;

const Error: FunctionComponent<Props> = (props) => {
  return (
    <div className="text-center py-12">
      <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
      <h3 className="text-white font-semibold mb-2">Something went wrong</h3>
      <p className="text-gray-400">Please try again later or search for something else</p>
    </div>
  );
};

export default Error;
