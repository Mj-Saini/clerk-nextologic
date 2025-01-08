import { Route, Routes } from "react-router-dom"
import AdminLogin from '../../components/AdminLogin';
// import AdminSignUp from '../../components/AdminSignUp';

const AdminDashboard = () => {
  return (
    <div>
        <Routes>
            <Route path="/admin-login" element={<AdminLogin/>}/>
            {/* <Route path="/admin-signup" element={<AdminSignUp/>}/> */}
        </Routes>
    </div>
  )
}

export default AdminDashboard