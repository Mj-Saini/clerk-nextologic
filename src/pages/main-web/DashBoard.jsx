/* eslint-disable no-unused-vars */

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import {
  BillingIcon,
  MenuIcon,
  RedArrowIcon,
  SignOutIcon,
  UserIcon,
  UserProfileIcon,
} from "../../components/common/Icons";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

const DashBoard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, isLoaded } = useAuth();
  const [openSideBar, setOpenSideBar] = useState(false);
  const { user } = useUser();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);
  const [sidebarFixed, setSidebarFixed] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 1024) {
      setSidebarFixed(false);
    }
  }, [windowWidth]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      alert("Logged out successfully");
      navigate("/sign-in");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    const db = getDatabase();
    const updatesRef = ref(db, "trades");

    const unsubscribe = onValue(updatesRef, (snapshot) => {
      if (snapshot.exists()) {
        const updates = snapshot.val();
        const count = Object.keys(updates).length;
        setUpdateCount(count);
      }
    });

    return () => unsubscribe();
  }, []);

  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center">
      <div className="bg-white shadow-lg w-full flex justify-end px-3 lg:pe-3 overflow relative">
        <div
          className={` w-4/5  group lg:hover:w-1/5 duration-300  bg-white shadow-lg px-3 h-full z-20 
        ${openSideBar ? "left-0" : "max-lg:-left-full"}
        ${sidebarFixed ? "lg:w-1/5 lg:-translate-x-4" : " lg:w-[69px] fixed left-0 top-0"}
          `}
        >
          <span
            onClick={() => setSidebarFixed(!sidebarFixed)}
            className="w-[36px] h-[36px] rounded-full bg-[white] shadow-lg hidden justify-center items-center absolute top-6 -right-3 lg:group-hover:flex"
          >
            <RedArrowIcon />
          </span>
          <Sidebar sideMenu={toggleSideBar} />
        </div>
        {/* Main Content */}
        <div
          className={` pb-5 duration-300 ${sidebarFixed ? "w-full lg:w-4/5" : "w-full lg:w-[94%]"}`}
        >
          <div className="sticky top-0 bg-white z-10">
            <div className="flex justify-between lg:justify-end items-center bg-white shadow-lg rounded-lg px-3 py-1 mt-2">
              <div onClick={toggleSideBar} className="cursor-pointer lg:hidden">
                <MenuIcon />
              </div>
              <div className="relative">
                <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  {isAdminDashboard ? (
                    <button
                      className="block w-full text-left px-4 py-2 text-lg btn_light"
                      onClick={() => {
                        localStorage.clear();
                        navigate("/admin-login");
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <button className="block w-full whitespace-nowrap px-2 sm:px-4 bg-[#C42B1E29] py-2 text-xs sm:text-base text-[#C42B1E] rounded-md !font-semibold relative">
                        CHRISTMAS OFFER
                      </button>

                      <button
                        onClick={toggleDropdown}
                        className="block w-full text-center whitespace-nowrap ps-2 sm:ps-4 py-2 text-base text-gray-700 "
                      >
                        {isLoaded && user ? (
                          <img
                            width={40}
                            height={40}
                            className="rounded-full"
                            src={user.imageUrl}
                            alt="use-profile"
                          />
                        ) : (
                          <UserProfileIcon />
                        )}
                      </button>
                    </>
                  )}
                </div>
                {/* {isDropdownOpen && ( */}
                <div
                  className={`absolute right-0 mt-6  bg-white border border-gray-200 rounded-lg shadow-md duration-300 overflow-hidden ${
                    isDropdownOpen ? "w-56 h-56" : "w-[1px] h-[1px]"
                  }`}
                >
                  <ul className={`p-0`}>
                    {isAdminDashboard ? (
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-[#6b3e37] hover:bg-gray-100"
                        onClick={() => {
                          localStorage.clear();
                          navigate("/admin-login");
                        }}
                      >
                        Admin Logout
                      </button>
                    ) : (
                      <>
                        <button className="w-full text-center whitespace-nowrap px-4 py-2 text-base uppercase text-[#6b3e37] flex items-center font-medium gap-2 border-b ">
                          {isLoaded && user ? (
                            <img
                              width={40}
                              height={40}
                              className="rounded-full"
                              src={user.imageUrl}
                              alt="use-profile"
                            />
                          ) : (
                            <UserProfileIcon />
                          )}
                          {isLoaded && user ? user.firstName : "thomas"}
                        </button>
                        <Link
                          onClick={toggleDropdown}
                          to={`user-profile`}
                          className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-[#6b3e37] hover:bg-gray-100 no-underline"
                        >
                          <UserIcon /> Profile
                        </Link>
                        <Link
                          onClick={toggleDropdown}
                          to={`billing`}
                          className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-[#6b3e37] hover:bg-gray-100 no-underline"
                        >
                          <BillingIcon /> Billing
                        </Link>
                        <button
                          className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-[#6b3e37] hover:bg-gray-100 no-underline border-t"
                          onClick={handleLogout}
                        >
                          <SignOutIcon /> Logout
                        </button>
                      </>
                    )}
                  </ul>
                </div>
                {/* )} */}
              </div>
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
