/* eslint-disable no-unused-vars */



import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import {
  BillingIcon,
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
  const { signOut , isLoaded} = useAuth();
  const [openSideBar,setOpenSideBar] = useState(false);
  const { user } = useUser();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(); // Clerk's logout method
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
      <div className="bg-white shadow-lg w-full flex justify-end px-3 lg:pe-3 overflow">
        <div className={` w-1/2 lg:w-16 lg:hover:w-1/5 duration-300 fixed left-0 top-0 bg-white shadow-lg px-3 h-full z-20 
        ${
          openSideBar ? "left-0":"max-lg:-left-full"
        }
          `}>
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="w-full lg:w-[94%] pb-5">
          <div className="sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center bg-white shadow-lg rounded-lg px-5 py-3">
              {/* {isAdminDashboard ? (
                <h2 className="text-2xl font-semibold ">Admin Dashboard</h2>
              ) : (
                <h2 onClick={()=>setOpenSideBar(!openSideBar)} className="text-2xl font-semibold ">User Dashboard</h2>
              )} */}
              <div></div>
              <div className="relative">
                <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  {isAdminDashboard ? (
                    <button
                      className="block w-full text-left px-4 py-2 text-lg text-black bg-gray-200 hover:bg-gray-100"
                      onClick={() => {
                        localStorage.clear();
                        navigate("/admin-login");
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <button className="block w-full whitespace-nowrap px-4 bg-[#C42B1E29] py-2 text-base text-[#C42B1E] rounded-md !font-semibold relative">
                        CHRISTMAS OFFER
                      </button>
                      
                      <button
                        onClick={toggleDropdown}
                        className="block w-full text-center whitespace-nowrap ps-4 py-2 text-base text-gray-700 "
                      >
                         {isLoaded && user ? <img width={40} height={40} className="rounded-full" src={user.imageUrl } alt="use-profile" />: <UserProfileIcon />}
                      </button>
                    </>
                  )}
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-6 w-56 bg-white border border-gray-200 rounded-lg shadow-md">
                    <ul className="p-0">
                      {isAdminDashboard ? (
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            localStorage.clear();
                            navigate("/admin-login");
                          }}
                        >
                          Admin Logout
                        </button>
                      ) : (
                        <>
                          <button
                            className="w-full text-center whitespace-nowrap px-4 py-2 text-base text-gray-700 flex items-center font-medium capitalize gap-2 border-b "
                          >
                        
                             {isLoaded && user ? <img width={40} height={40} className="rounded-full" src={user.imageUrl } alt="use-profile" />: <UserProfileIcon />}
                             {isLoaded && user ? user.firstName : "thomas"}
                          </button>
                          <Link
                            onClick={toggleDropdown}
                            to={`user-profile`}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                          >
                            <UserIcon /> Profile
                          </Link>
                          <Link
                            onClick={toggleDropdown}
                            to={`billing`}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                          >
                            <BillingIcon /> Billing
                          </Link>
                          <button
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline border-t"
                            onClick={handleLogout}
                          >
                            <SignOutIcon /> Logout
                          </button>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
