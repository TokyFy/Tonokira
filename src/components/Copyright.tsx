import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const Copyright: FunctionComponent<Props> = (props) => {
  return (
    <div className="text-gray-500 text-xs">
      <p className="mb-2">
        Made with <span className="text-red-500">♥</span> by{" "}
        <a 
          className="text-white hover:text-green-400 hover:underline transition-colors font-semibold" 
          href="https://toky.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Toky
        </a>
      </p>
      <p className="text-gray-600">
        © 2025 Lirikisa. All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;