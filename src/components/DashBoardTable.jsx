import { useAuth } from "@clerk/clerk-react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
const data = [
    {
      id: 1,
      profile: "Female",
      memberID: "F123456",
      nameTag: "Thomas Miranda",
      age: "29",
      city: "New York",
      status: "Active",
      lastUpdate: "2025-01-06 13:45",
    },
  ];
const DashboardTable = () => {
  const navigate=useNavigate()
  const { signOut } = useAuth(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleLogout = async () => {
    try {
      await signOut(); // Clerk's logout method
      alert("Logged out successfully");
      navigate("/sign-in")
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen px-6">
      <div className="flex justify-end mb-4 bg-white shadow p-5 ">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            {/* <FaUserCircle size={24} /> */}
            <span>User Profile</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
              <ul className="py-1">
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => alert("View Profile clicked")}
                  >
                    View Profile
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="bg-black text-white px-4 py-2 rounded shadow hover:bg-black">
            Add Profile
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-300">
            Refresh
          </button>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded shadow hover:bg-black">
          Open Solo Window
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow-lg overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Profile
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Member ID
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Name/Tag
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Age
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                City
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Last Update
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 whitespace-nowrap">{item.profile}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.memberID}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.nameTag}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.age}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.city}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      item.status === "Active"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{item.lastUpdate}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <button className="text-black hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
    </div>
  );
};

export default DashboardTable;
