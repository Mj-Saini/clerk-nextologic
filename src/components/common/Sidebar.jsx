import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
  return (
    <div className="top-0 sticky ">
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Account</h2>
        <p className="text-lg text-gray-600">Manage your account info.</p>
      </div>
      <nav className="mt-6">
        <div className="flex flex-col gap-3">
          {isAdminDashboard ? (
            <>
              <Link
                to={""}
                className="flex items-center px-4 py-3 text-gray-900 font-medium bg-gray-200 rounded-lg no-underline capitalize"
              >
                <span className="mr-3">👤</span> DashBoard
              </Link>
              <Link
                to={"trade-call-form"}
                className="flex items-center px-4 py-3 text-gray-900 font-medium bg-gray-200 rounded-lg no-underline capitalize"
              >
                <span className="mr-3">👤</span> trade call form
              </Link>
            </>
          ) : (
            <>
              <Link
                to={""}
                className="flex items-center px-4 py-3 text-gray-900 font-medium bg-gray-200 rounded-lg no-underline"
              >
                <span className="mr-3">👤</span> DashBoard
              </Link>{" "}
              <Link
                to={"trade-call"}
                className="flex items-center px-4 py-3 text-gray-900 font-medium bg-gray-200 rounded-lg no-underline capitalize"
              >
                <span className="mr-3">👤</span> trade call
              </Link>
              <Link
                to={"settings"}
                className="flex items-center px-4 py-3 text-gray-900 font-medium bg-gray-200 rounded-lg no-underline capitalize"
              >
                <span className="mr-3">👤</span> settings
              </Link>
              <Link
                to={"pricing"}
                className="flex items-center px-4 py-3 text-gray-900 font-medium bg-gray-200 rounded-lg no-underline capitalize"
              >
                <span className="mr-3">👤</span> pricing
              </Link>
            </>
          )}

        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
