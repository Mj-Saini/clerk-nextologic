import { useEffect, useState } from "react";
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
import NewForm from "../../components/NewForm";
import Billing from "../../components/Billing";
import Wappalyzer from "../../components/Wappalyzer";
import TradeEntryForm from "../../components/TradeEntryForm";
import TradeEntryTable from "../../components/TradeEntryTable";
import CustomToast from "../../components/CustomToast";
import Settings from "../../components/Settings";
import PricePlan from "../../components/PricePlan";
import PriceSettings from "../../components/PriceSettings";
import DittoSettings from "../../components/DittoSettings";
import AddSymbol from "../../components/AddSymbol";

const UserLogin = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useClerk();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  const token = localStorage.getItem("token");

  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = () => {
    setIsToastVisible(true);
  };

  const hideToast = () => {
    setIsToastVisible(false);
  };

  return (
    <div className="overflow">
      <CustomToast
        message={"trades call has a new entry"}
        show={isToastVisible}
        onClose={hideToast}
      />
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
          <Route path="billing" element={<Billing />} />
          {/* <Route path="trade-call" element={<TradeEntryTable />} /> */}
          <Route path="settings" element={<Settings />} />
          <Route path="detto-settings" element={<DittoSettings />} />

          <Route path="pricing" element={<PricePlan />}>
            <Route path="price" element={<PriceSettings />} />
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
          <Route path="trade-call" element={<TradeEntryTable />} />
          <Route
            path="trade-call-form"
            element={<TradeEntryForm showToast={showToast} />}
          />
          <Route
            path="trade-call-form/:id"
            element={<TradeEntryForm showToast={showToast} />}
          />
          <Route path="add-symbol" element={<AddSymbol />} />
        </Route>
        <Route path="/broker" element={<NewForm />} />
        <Route path="/wappalyzer" element={<Wappalyzer />} />
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
