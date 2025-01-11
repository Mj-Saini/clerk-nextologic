import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/png/logo.png";
import { DashBoardIcon, DittoSettings, PricePlanIcon, Settings } from "./Icons";

const Sidebar = ({ sideMenu }) => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
  return (
    <div className="top-0 sticky overflow-hidden">
      <div className="pt-6 flex justify-between">
        <img width={40} height={40} src={logo} alt="logo" />
        <span
          onClick={sideMenu}
          className="text-3xl cursor-pointer text-[#C42B1E] "
        >
          &times;
        </span>
      </div>
      <nav className="mt-6">
        <div className="flex flex-col gap-3 ps-2">
          {isAdminDashboard ? (
            <>
              <Link
                onClick={sideMenu}
                to={""}
                className={`flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize ${
                  location.pathname === "" ? "#C42B1E29" : ""
                }`}
              >
                <span className="mr-3">
                  <DashBoardIcon />
                </span>{" "}
                DashBoard
              </Link>
              <Link
                onClick={sideMenu}
                to={"trade-call"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3"><PricePlanIcon /></span> trade call
              </Link>
              <Link
                onClick={sideMenu}
                to={"trade-call-form"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3">👤</span> trade call form
              </Link>
              <Link
                onClick={sideMenu}
                to={"add-symbol"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3">👤</span> add symbol
              </Link>
            </>
          ) : (
            <>
              <Link
                onClick={sideMenu}
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
                onClick={sideMenu}
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
                onClick={sideMenu}
                to={"settings"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3">
                  <DittoSettings />
                </span>{" "}
                settings
              </Link>
              <Link
                onClick={sideMenu}
                to={"detto-settings"}
                className="flex items-center py-3 text-gray-900 font-medium rounded-lg no-underline whitespace-nowrap capitalize"
              >
                <span className="mr-3">
                  <Settings />
                </span>{" "}
                ditto settings
              </Link>
              <Link
                onClick={sideMenu}
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
