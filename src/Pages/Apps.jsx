import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import downloads from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
  const { apps } = useApps();

  const [search, setSearch] = useState('')
  const tirm = search.trim().toLocaleLowerCase()
  const searchedApps = tirm ? apps.filter(app => app.title.toLocaleLowerCase().includes(tirm)) : apps

  return (
    <div className="max-w-[1440px] mx-auto p-4 text-[#001931] my-5 md:my-10 xl:my-20">
      <div className="text-center ">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="mt-4 text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mt-10">
        <div className="flex justify-between gap-4 items-center mb-4">
          <h1 className="text-2xl font-semibold">({searchedApps.length}) Apps Found</h1>
          <label className="input">
            <span className="label"><CiSearch /></span>
            <input value={search}
            onChange={e => setSearch(e.target.value)} type="search" placeholder="Search Apps" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
          {searchedApps.map((app) => (
            <div key={app.id} className="card bg-base-100 shadow-lg">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
