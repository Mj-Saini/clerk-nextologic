import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard")
  return (
    <>
      <div className="p-6 top-0 sticky">
        <h2 className="text-lg font-semibold">Account</h2>
        <p className="text-sm text-gray-600">Manage your account info.</p>
      </div>
      <nav className="mt-6">
        <div>
          {isAdminDashboard ? (
            <Link
              to={""}
              className="flex items-center p-4 text-gray-900 font-medium bg-gray-200 rounded-l-lg capitalize"
            >
              <span className="mr-3">👤</span> DashBoard
            </Link>
          ):( <Link
            to={""}
            className="flex items-center p-4 text-gray-900 font-medium bg-gray-200 rounded-l-lg"
          >
            <span className="mr-3">👤</span> DashBoard
          </Link>)}
         
          <Link
            to={"trade-call"}
            className="flex items-center p-4 text-gray-900 font-medium bg-gray-200 rounded-l-lg capitalize"
          >
            <span className="mr-3">👤</span> trade call
          </Link>
          {isAdminDashboard && (
            <Link
              to={"trade-call-form"}
              className="flex items-center p-4 text-gray-900 font-medium bg-gray-200 rounded-l-lg capitalize"
            >
              <span className="mr-3">👤</span> trade call form
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
