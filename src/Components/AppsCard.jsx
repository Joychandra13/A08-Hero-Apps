import React from "react";
import downloads from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="card bg-base-100 shadow-lg">
      <figure className="px-4 pt-4">
        <img
          src={app.image}
          alt={app.title}
          className="rounded-lg h-[316px] w-full"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{app.title}</h2>
        <div className="card-actions flex items-center justify-between">
          <div className="py-2 px-2.5 bg-[#F1F5E8] flex items-center rounded-[4px] gap-2">
            <img className="w-4 h-4" src={downloads} />{" "}
            <h1 className="text-[#00D390] text-base font-medium">
              {app.downloads >= 1000000
                ? (app.downloads / 1000000).toFixed(1) + "M"
                : app.downloads >= 1000
                ? (app.downloads / 1000).toFixed(1) + "K"
                : app.downloads}
            </h1>
          </div>
          <div className="py-2 px-2.5 bg-[#F1F5E8] flex items-center rounded-[4px] gap-2">
            <img className="w-4 h-4" src={ratings} />{" "}
            <h1 className="text-[#FF8811] text-base font-medium">
              {app.ratingAvg}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
