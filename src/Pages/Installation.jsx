import React, { useState } from "react";
import { loadInstall, removeFromInstall } from "../utils/localStorage";
import Downloads from "../assets/icon-downloads.png";
import Ratings from "../assets/icon-ratings.png";

const Installation = () => {
  const [install, setInstall] = useState(() => loadInstall());
  const [sortOrder, setSortOrder] = useState("none");

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...install].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...install].sort((a, b) => b.size - a.size);
    } else {
      return install;
    }
  })();

  const handleRemove = (id) => {
    removeFromInstall(id);
    setInstall((prev) => prev.filter((a) => a.id !== id));
  };
  return (
    <div className="max-w-[1440px] mx-auto p-4 my-20 text-[#001931]">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Your Installed Apps</h1>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between py-5 items-center">
          <h1 className="text-2xl font-semibold">
            {sortedItem.length} Apps Found
          </h1>

          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Size</option>
              <option value="size-asc">Size: Low to High</option>
              <option value="size-desc">Size: High to Low</option>
            </select>
          </label>
        </div>
        <div className="space-y-3">
          {sortedItem.map((app) => (
            <div className="card bg-base-100 shadow-lg px-4">
              <div className="flex justify-between items-center">
                <div className="flex">
                  {" "}
                  <figure className="">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="rounded-lg w-20 h-20 "
                    />
                  </figure>
                  <div className="card-body  ">
                    <h2 className="card-title">{app.title}</h2>
                    <div className="card-actions flex items-center justify-items-start gap-4.5">
                      <div className="flex items-center rounded-[4px] gap-2">
                        <img className="w-4 h-4" src={Downloads} />{" "}
                        <h1 className="text-[#00D390] text-base font-medium">
                          {app.downloads >= 1000000
                            ? (app.downloads / 1000000).toFixed(1) + "M"
                            : app.downloads >= 1000
                            ? (app.downloads / 1000).toFixed(1) + "K"
                            : app.downloads}
                        </h1>
                      </div>
                      <div className="flex items-center rounded-[4px] gap-2">
                        <img className="w-4 h-4" src={Ratings} />{" "}
                        <h1 className="text-[#FF8811] text-base font-medium">
                          {app.ratingAvg}
                        </h1>
                      </div>
                      <div className="flex items-center rounded-[4px] gap-2">
                        <h1 className="text-[#627382] text-base ">
                          {app.size} MB
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(app.id)}
                  className="btn bg-[linear-gradient(90deg,rgba(0,130,122,1)_0%,rgba(84,207,104,1)_100%)] text-white font-semibold"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
