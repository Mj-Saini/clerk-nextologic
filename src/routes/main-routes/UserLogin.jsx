import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import SignInUser from "../../components/SignInUser";
import SignUpUser from "../../components/common/SignUpUser";
import VerifyEmailUser from "../../components/VerifyEmailUser";
import DashBoard from "../../pages/main-web/DashBoard";
import DashboardTable from "../../components/DashBoardTable";
import ProtectedRoute from "../../components/ProtectedRoute";
import FactorOne from "../../components/FectorOne";
import AdminLogin from "../../components/AdminLogin";
import UserProfilePage from "../../components/UserProfile";

const UserLogin = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useClerk();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  const token = localStorage.getItem("token");

  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardTable />}>
            <Route path="user-profile" element={<UserProfilePage />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<SignInUser />}>
          <Route path="factor-one" element={<FactorOne />} />
        </Route>
        <Route path="/sign-up" element={<SignUpUser />}>
          <Route path="verify-email-address" element={<VerifyEmailUser />} />
        </Route>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard"
          element={token ? <DashBoard /> : <RedirectToSignIn />}
        >
          <Route index element={<DashboardTable />} />
        </Route>
        <Route path="*" element={<RedirectToSignIn />} />
      </Routes>
    </div>
  );
};

const RedirectToSignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/sign-up"); // Redirect to sign-in page
  }, [navigate]);

  return null; // Return nothing since we just redirect
};

export default UserLogin;
