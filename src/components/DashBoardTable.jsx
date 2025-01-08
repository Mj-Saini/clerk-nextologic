
import { useNavigate, useLocation, Outlet } from "react-router-dom"; // Import useLocation

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
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="">
      {location.pathname.endsWith("/dashboard/user-profile") && (
        <div className="flex justify-center items-center h-screen w-full top-0 left-0 fixed">
          <div
            onClick={() => navigate("/dashboard")}
            className="fixed top-0 left-0 h-full w-full bg-black/50 flex justify-center items-center"
          ></div>
          <div className="z-10">
            <Outlet />
          </div>
        </div>
      )}

      <div className="bg-gray-100 h-screen px-6">
        
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
                  <td className="px-4 py-2 whitespace-nowrap">
                    {item.profile}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {item.memberID}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {item.nameTag}
                  </td>
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
                  <td className="px-4 py-2 whitespace-nowrap">
                    {item.lastUpdate}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <button className="text-black hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
