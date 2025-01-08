import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import {
  BillingIcon,
  SignOutIcon,
  UserIcon,
  UserProfileIcon,
} from "../../components/common/Icons";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";

const DashBoard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
  const isAdminDashboard = location.pathname === "/admin-dashboard";
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg w-full flex">
          <div className="w-1/5 sticky top-0">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="w-4/5 px-6">
            <div className="flex justify-between items-center mb-4 bg-white shadow p-5 sticky top-0">
              {isAdminDashboard ? (
                <h2 className="text-2xl font-semibold ">Admin Dashboard</h2>
              ) : (
                <h2 className="text-2xl font-semibold ">User Dashboard</h2>
              )}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                >
                  {/* <FaUserCircle size={24} /> */}
                  {isAdminDashboard ? (
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        localStorage.clear();
                        navigate("/admin-login");
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <button className="block w-full whitespace-nowrap px-4 bg-gray-200 py-2 text-base text-[black] rounded-md font-medium">
                        CHRISMASH OFFER
                      </button>
                      <button
                        onClick={toggleDropdown}
                        className="block w-full text-center whitespace-nowrap ps-4 py-2 text-base text-gray-700 "
                      >
                        <UserProfileIcon />
                      </button>
                    </>
                  )}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-6 w-56 bg-white border border-gray-200 rounded-lg shadow-md">
                    <ul className="">
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
                            // onClick={toggleDropdown}
                            className="w-full text-center whitespace-nowrap px-4 py-2 text-base text-gray-700 flex items-center font-medium capitalize gap-2 border-b "
                          >
                            <UserProfileIcon /> thomos selvanat...
                          </button>
                          <Link
                            onClick={toggleDropdown}
                            to={`user-profile`}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <UserIcon /> Profile
                          </Link>
                          <Link
                            to={`/billing`}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <BillingIcon /> Billing
                          </Link>
                          <button
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t"
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
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
