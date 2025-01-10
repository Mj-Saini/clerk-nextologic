/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
// import Sidebar from "../../components/common/Sidebar";
// import {
//   BillingIcon,
//   SignOutIcon,
//   UserIcon,
//   UserProfileIcon,
// } from "../../components/common/Icons";
// import { useAuth } from "@clerk/clerk-react";
// import { useEffect, useState } from "react";
// import { getDatabase, onValue, ref } from "firebase/database";

// const DashBoard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { signOut } = useAuth();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [updateCount, setUpdateCount] = useState(0);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(); // Clerk's logout method
//       alert("Logged out successfully");
//       navigate("/sign-in");
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   useEffect(() => {
//     const db = getDatabase();
//     const updatesRef = ref(db, "trades"); 

//     const unsubscribe = onValue(updatesRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const updates = snapshot.val();
//         const count = Object.keys(updates).length; 
//         setUpdateCount(count);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

 
//   const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
//   return (
//     <>
//       <div className="min-h-screen bg-gray-900 flex justify-center">
//         <div className="bg-white shadow-lg w-full flex">
//           <div className="w-1/5 sticky top-0 bg-black/20 px-3">
//             <Sidebar />
//           </div>
//           {/* Main Content */}
//           <div className="w-4/5 pb-5">
//            <div className=" sticky top-0 bg-white z-10">
//            <div className="flex justify-between items-center bg-black/20 px-5 py-3">
//               {isAdminDashboard ? (
//                 <h2 className="text-2xl font-semibold ">Admin Dashboard</h2>
//               ) : (
//                 <h2 className="text-2xl font-semibold ">User Dashboard</h2>
//               )}
//               <div className="relative">
//                 <div
                 
//                   className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
//                 >
               
//                   {isAdminDashboard ? (
//                     <button
//                       className="block w-full text-left px-4 py-2 text-lg text-black bg-gray-200 hover:bg-gray-100"
//                       onClick={() => {
//                         localStorage.clear();
//                         navigate("/admin-login");
//                       }}
//                     >
//                       Logout
//                     </button>
//                   ) : (
//                     <>
//                       <button className="block w-full whitespace-nowrap px-4 bg-gray-200 py-2 text-base text-[black] rounded-md font-medium relative">
//                         CHRISTMAS OFFER
//                       </button>
                      
//                       <button
//                         onClick={toggleDropdown}
//                         className="block w-full text-center whitespace-nowrap ps-4 py-2 text-base text-gray-700 "
//                       >
//                         <UserProfileIcon />
//                       </button>
//                     </>
//                   )}
//                 </div>
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-6 w-56 bg-white border border-gray-200 rounded-lg shadow-md">
//                     <ul className="p-0">
//                       {isAdminDashboard ? (
//                         <button
//                           className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           onClick={() => {
//                             localStorage.clear();
//                             navigate("/admin-login");
//                           }}
//                         >
//                           Admin Logout
//                         </button>
//                       ) : (
//                         <>
//                           <button
//                             // onClick={toggleDropdown}
//                             className="w-full text-center whitespace-nowrap px-4 py-2 text-base text-gray-700 flex items-center font-medium capitalize gap-2 border-b "
//                           >
//                             <UserProfileIcon /> thomos selvanat...
//                           </button>
//                           <Link
//                             onClick={toggleDropdown}
//                             to={`user-profile`}
//                             className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
//                           >
//                             <UserIcon /> Profile
//                           </Link>
//                           <Link
//                             onClick={toggleDropdown}
//                             to={`billing`}
//                             className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
//                           >
//                             <BillingIcon /> Billing
//                           </Link>
//                           <button
//                             className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline border-t"
//                             onClick={handleLogout}
//                           >
//                             <SignOutIcon /> Logout
//                           </button>
//                         </>
//                       )}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//            </div>
//             <div className=" px-6">
//             <Outlet />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashBoard;


import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import {
  BillingIcon,
  SignOutIcon,
  UserIcon,
  UserProfileIcon,
} from "../../components/common/Icons";
import { useAuth } from "@clerk/clerk-react"; 
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

const DashBoard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, user , isLoaded} = useAuth();
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

  console.log(isLoaded,user)

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center">
      <div className="bg-white shadow-lg w-full flex">
        <div className="w-1/5 sticky top-0 bg-black/20 px-3">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="w-4/5 pb-5">
          <div className="sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center bg-black/20 px-5 py-3">
              {isAdminDashboard ? (
                <h2 className="text-2xl font-semibold ">Admin Dashboard</h2>
              ) : (
                <h2 className="text-2xl font-semibold ">User Dashboard</h2>
              )}
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
                      <button className="block w-full whitespace-nowrap px-4 bg-gray-200 py-2 text-base text-[black] rounded-md font-medium relative">
                        CHRISTMAS OFFER
                      </button>
                      
                      <button
                        onClick={toggleDropdown}
                        className="block w-full text-center whitespace-nowrap ps-4 py-2 text-base text-gray-700 "
                      >
                        <UserProfileIcon />
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
                            <UserProfileIcon /> 
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
          <div className="px-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
