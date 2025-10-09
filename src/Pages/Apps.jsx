import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import { CiSearch } from "react-icons/ci";
import AppsCard from "../Components/AppsCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const Apps = () => {
  const { apps } = useApps();
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const tirm = search.trim().toLocaleLowerCase();
  const searchedApps = tirm
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(tirm))
    : apps;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto p-4 text-[#001931] my-5 md:my-10 xl:my-20">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Our All Applications</h1>
          <p className="mt-4 text-xl text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="mt-10 ">
          <div className="flex justify-between gap-4 items-center mb-4">
            <h1 className="text-2xl font-semibold">
              ({searchedApps.length}) Apps Found
            </h1>
            <label className="input">
              <span className="label">
                <CiSearch />
              </span>
              <input
                type="search"
                value={search}
                onChange={handleSearch}
                placeholder="Search Apps"
              />
            </label>
          </div>
          {loading ? (
            <div className="flex justify-center items-center ">
              <LoadingSpinner />
            </div>
          ) : searchedApps.length === 0 ? (
            <div className="flex justify-center items-center py-50">
              <h2 className="text-xl text-gray-500">No apps found!</h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {searchedApps.map((app) => (
                <AppsCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Apps;
