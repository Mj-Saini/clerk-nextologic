import { Route, Routes } from "react-router-dom";
import AdminLogin from "../../components/AdminLogin";
import DashBoard from "../../pages/main-web/DashBoard";
import DashboardTable from "../../components/DashBoardTable";
// import AdminSignUp from '../../components/AdminSignUp';

const AdminDashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<DashBoard />}>
          <Route index element={<DashboardTable />} />
        </Route>
        {/* <Route path="/admin-signup" element={<AdminSignUp/>}/> */}
      </Routes>
    </div>
  );
};

export default AdminDashboard;
