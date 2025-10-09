import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import Downloads from "../assets/icon-downloads.png";
import Ratings from "../assets/icon-ratings.png";
import Reviews from "../assets/icon-review.png";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { updateList } from "../utils/localStorage";
import { toast } from "react-toastify";
import AppDetailsError from "./AppDetailsError";


const AppDetails = () => {
  const { id } = useParams();
  const { apps} = useApps();
  const [installed, setInstalled] = useState(false);
  const app = apps.find((a) => String(a.id) === id);
  if (!app) return <AppDetailsError />;
  const {
    title, image, companyName, downloads, ratingAvg, reviews, size, description, } = app || {};

 const handleInstall = () => {
    updateList(app); 
    setInstalled(true); 
    toast.success("App Installed Successfully"); 
  };

  return (
    <div className="max-w-[1440px] mx-auto p-4 my-5 md:my-10 xl:my-20 text-[#001931]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
        <div className="md:col-span-1">
          <img className="w-full h-auto" src={image} alt={title} />
        </div>
        <div className="md:col-span-3">
          <h1 className="text-3xl mb-2 font-bold">{title}</h1>
          <p className="text-xl text-[#627382]">
            Developed by{" "}
            <span className="font-semibold bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>
          <hr className="my-7.5 border-t border-[#001931]/20" />
          <div className="card-actions flex items-center justify-between md:justify-normal md:justify-items-start mb-5">
            <div className="flex flex-col items-start md:w-37.5 gap-2">
              <img className="w-10 h-10" src={Downloads} />
              <p className="text-sm md:text-base text-[#627382]">Downloads</p>
              <h1 className="text-3xl md:text-[40px] font-extrabold">
                {downloads >= 1000000
                  ? (downloads / 1000000).toFixed(1) + "M"
                  : downloads >= 1000
                  ? (downloads / 1000).toFixed(1) + "K"
                  : downloads}
              </h1>
            </div>
            <div className="flex flex-col items-start md:w-37.5 gap-2">
              <img className="w-10 h-10" src={Ratings} />
              <p className="text-sm md:text-base text-[#627382]">Average Ratings</p>
              <h1 className="text-3xl md:text-[40px] font-extrabold">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col items-start w-37.5 gap-2">
              <img className="w-10 h-10" src={Reviews} />
              <p className="text-sm md:text-base text-[#627382]">Total Reviews</p>
              <h1 className="text-3xl md:text-[40px] font-extrabold">
                {reviews >= 1000000
                  ? (reviews / 1000000).toFixed(1) + "M"
                  : reviews >= 1000
                  ? (reviews / 1000).toFixed(1) + "K"
                  : reviews}
              </h1>
            </div>
          </div>
          <button onClick={handleInstall}
            disabled={installed}  className=" btn bg-[linear-gradient(90deg,rgba(0,130,122,1)_0%,rgba(84,207,104,1)_100%)] text-xl font-semibold text-white py-3.5 px-5">
           {installed ? "Installed ✅" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr className="my-10 border-t border-[#001931]/20" />

      {/* chart */}
        <h1 className="text-2xl font-semibold mb-6">Ratings</h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[...(app?.ratings || [])].reverse()}
            layout="vertical"
          >
            <XAxis
              type="number"
              tick={{ fill: "#627382", fontSize: 18 }}
            />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fill: "#627382", fontSize: 18 }}
            />
            <Bar dataKey="count" fill="#FF8811" barSize={30} />
          </BarChart>
        </ResponsiveContainer>

      <hr className="my-10 border-t border-[#001931]/20" />
      <div>
        <h1 className="text-2xl font-semibold mb-6">Description</h1>
        <p className="text-xl text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
