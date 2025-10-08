import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const activeLink =
    "bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-semibold underline decoration-[#632ee3]";
  const normalLink =
    "hover:bg-gradient-to-r hover:from-[#632ee3] hover:to-[#9f62f2] hover:bg-clip-text hover:text-transparent";
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1440px] mx-auto p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation">Installation</NavLink>
              </li>
            </ul>
          </div>
          <Link className="flex items-center gap-1" to="/">
            <img className="w-[40px] h-[40px]" src={Logo} alt="" />
            <span className="text-base font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
