import React from "react";
import error from "../assets/App-Error.png";
import { Link } from "react-router";

const AppDetailsError = () => {
  return (
    <>
      <div className="h-fit flex flex-col justify-center items-center py-20 px-4 gap-4.5">
        <img src={error} alt="" />
        <div className="text-center">
            <h1 className="mb-2 text-[#001931] text-5xl font-bold">Oops, page not found!</h1>
            <p className="md-4 mt-4 text-xl text-[#627382]">The page you are looking for is not available.</p>
            <Link to="/" className="btn mt-10 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white text-base font-semibold px-8">Go Back!</Link>
        </div>
      </div>
    </>
  );
};

export default AppDetailsError;
