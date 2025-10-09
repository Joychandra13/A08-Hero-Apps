import React from "react";
import GooglePlay from "../assets/GooglePlay.png";
import AppStore from "../assets/AppStore.png";
import Hero from "../assets/hero.png";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import AppsCard from "../Components/AppsCard";

const Home = () => {
  const { apps, error, loading } = useApps();

  const sliceApps = apps.slice(0, 8);
  return (
    <div className="my-5 md:my-10 xl:my-20 text-[#001931]">
      <div className="flex flex-col gap-10 items-center pt-4 px-4">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold">
            We Build <br />
            <span className="bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] bg-clip-text text-transparent ">
              Productive
            </span>
             Apps
          </h1>
          <p className="mt-4 text-[#627382]">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.
            <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            className="btn text-xl font-semibold py-7 px-5"
          >
            <img src={GooglePlay} alt="" />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="btn text-xl font-semibold py-7 px-5"
          >
            <img src={AppStore} alt="" />
            App Store
          </a>
        </div>
        <img src={Hero} alt="" />
      </div>
      <div className="bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-white p-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mt-10">
          <div className="flex flex-col gap-4 px-23">
            <p className="text-base">Total Downloads</p>
            <h1 className="text-7xl font-extrabold">29.6M</h1>
            <p className="text-base">21% more than last month</p>
          </div>
          <div className="flex flex-col gap-4 px-23">
            <p className="text-base">Total Reviews</p>
            <h1 className="text-7xl font-extrabold">906K</h1>
            <p className="text-base">46% more than last month</p>
          </div>
          <div className="flex flex-col gap-4 px-23">
            <p className="text-base">Active Apps</p>
            <h1 className="text-7xl font-extrabold">132+</h1>
            <p className="text-base">31 more will Launch</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Trending Apps</h1>
          <p className="text-base mt-4 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="max-w-[1440px] mx-auto px-4 mt-10 flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
            {sliceApps.map((app) => (
              <AppsCard key={app.id} app={app} />
            ))}
          </div>
          <Link
            to="/apps"
            className="btn mt-10 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white text-base font-semibold px-8"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
