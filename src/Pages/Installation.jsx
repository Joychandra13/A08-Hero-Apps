import React, { useState } from "react";
import { loadInstall, removeFromInstall } from "../utils/localStorage";
import Downloads from "../assets/icon-downloads.png";
import Ratings from "../assets/icon-ratings.png";
import { toast } from "react-toastify";

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
    toast.info("App Uninstalled Successfully ");
  };
  return (
    <div className="max-w-[1440px] mx-auto p-4 my-5 md:my-10 xl:my-20 text-[#001931]">
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
        <div className="space-y-3  ">
          {sortedItem.length === 0 ? (
            <div className="text-center w-full py-38">
              <h2 className="text-3xl font-semibold mb-3 text-gray-600">
                No Apps Found
              </h2>
              <p className="text-lg text-gray-500">
                Install apps to see them listed here.
              </p>
            </div>
          ) : (
            sortedItem.map((app) => (
              <div key={app.id} className="card bg-base-100 shadow-lg px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex flex-col md:flex-row mt-4 md:mt-0">
                    <figure>
                      <img
                        src={app.image}
                        alt={app.title}
                        className="rounded-lg w-20 h-20"
                      />
                    </figure>
                    <div className="card-body flex items-center md:items-start">
                      <h2 className="card-title">{app.title}</h2>
                      <div className="card-actions flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <img className="w-4 h-4" src={Downloads} alt="" />
                          <h1 className="text-[#00D390] text-base font-medium">
                            {app.downloads >= 1000000
                              ? (app.downloads / 1000000).toFixed(1) + "M"
                              : app.downloads >= 1000
                              ? (app.downloads / 1000).toFixed(1) + "K"
                              : app.downloads}
                          </h1>
                        </div>
                        <div className="flex items-center gap-2">
                          <img className="w-4 h-4" src={Ratings} alt="" />
                          <h1 className="text-[#FF8811] text-base font-medium">
                            {app.ratingAvg}
                          </h1>
                        </div>
                        <div className="flex items-center gap-2">
                          <h1 className="text-[#627382] text-base">
                            {app.size} MB
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(app.id)}
                    className="btn bg-gradient-to-r from-[#00827A] to-[#54CF68] text-white font-semibold mb-4 md:mb-0"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
