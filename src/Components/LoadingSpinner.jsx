import React from "react";
import Logo from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[85vh]">
      <h1 className="text-4xl font-bold flex items-center gap-2">
        L
        <span className="relative w-8 h-8">
          <img
            src={Logo}
            alt="logo"
            className="w-full h-full animate-spin"
          />
        </span>
        ading
      </h1>
    </div>
  );
};

export default LoadingSpinner;
