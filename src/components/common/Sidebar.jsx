import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/png/logo.png";
import { DashBoardIcon, DittoSettings, PricePlanIcon, Settings } from "./Icons";

const Sidebar = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
  return (
    <div className="top-0 sticky overflow-hidden">
      <div className="pt-6 ">
        <img width={40} height={40} src={logo} alt="logo" />
      </div>
      <nav className="mt-6">
        <div className="flex flex-col gap-3 ps-2">
          {isAdminDashboard ? (
            <>
              <Link
                to={""}
                className={`flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize ${
                  location.pathname === "" ? "#C42B1E29" : ""
                }`}
              >
                <span className="mr-3">👤</span> DashBoard
              </Link>
              <Link
                to={"trade-call"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3">👤</span> trade call
              </Link>
              <Link
                to={"trade-call-form"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3">👤</span> trade call form
              </Link>
              <Link
                to={"add-symbol"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3">👤</span> add symbol
              </Link>
            </>
          ) : (
            <>
              <Link
                to={""}
                className={`flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize ${
                  location.pathname === "" ? "#C42B1E29" : ""
                }`}
              >
                <span className="mr-3">
                  <DashBoardIcon />
                </span>{" "}
                DashBoard
              </Link>{" "}
              <Link
                to={"trade-call"}
                className={`flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize ${
                  location.pathname === "trade-call" ? "#C42B1E29" : "#C42B1E29"
                }`}
              >
                <span className="mr-3">
                  <PricePlanIcon />
                </span>{" "}
                trade call
              </Link>
              <Link
                to={"settings"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3">
                  <DittoSettings />
                </span>{" "}
                settings
              </Link>
              <Link
                to={"detto-settings"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3">
                  <Settings />
                </span>{" "}
                ditto settings
              </Link>
              <Link
                to={"pricing"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
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
