import React, { FunctionComponent } from "react";
import { AlertTriangle } from "lucide-react";

interface OwnProps {}
type Props = OwnProps;

const Error: FunctionComponent<Props> = (props) => {
  return (
    <div className="text-center py-16">
      <AlertTriangle size={64} className="text-gray-600 mx-auto mb-4" />
      <h3 className="text-white text-xl font-bold mb-2">Something went wrong</h3>
      <p className="text-gray-400 mb-6">
        We couldn't load the content. Please try again.
      </p>
      <button 
        onClick={() => window.location.reload()}
        className="spotify-btn-secondary"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;