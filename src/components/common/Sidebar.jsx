
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
        <div className="p-6">
          <h2 className="text-lg font-semibold">Account</h2>
          <p className="text-sm text-gray-600">Manage your account info.</p>
        </div>
        <nav className="mt-6">
          <div>
            <Link to={"dashboard"} className="flex items-center p-4 text-gray-900 font-medium bg-gray-200 rounded-l-lg">
              <span className="mr-3">👤</span> DashBoard
            </Link>
            
        
          </div>
        </nav>
      
    </>
  );
};

export default Sidebar;
