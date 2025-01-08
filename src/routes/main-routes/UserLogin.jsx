// import { Route, Routes } from "react-router-dom";
// import SignInUser from "../../components/SignInUser";
// import SignUpUser from "../../components/common/SignUpUser";
// import VerifyEmailUser from "../../components/VerifyEmailUser";
// import DashBoard from "../../pages/main-web/DashBoard";
// import DashboardTable from "../../components/DashBoardTable";
// import LandingPage from "../../pages/main-web/LandingPage";
// import ProtectedRoute from "../../components/ProtectedRoute";
// import FactorOne from "../../components/FectorOne";

// const UserLogin = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <DashBoard />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<DashboardTable />} />
//         </Route>
//         <Route path="/sign-in" element={<SignInUser />} >
//         <Route path="factor-one" element={<FactorOne />} />
        
//         </Route>
//         <Route path="/sign-up" element={<SignUpUser />}>
//           <Route path="verify-email-address" element={<VerifyEmailUser />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default UserLogin;



import { Route, Routes, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react"; // Import the useUser hook from Clerk
import SignInUser from "../../components/SignInUser";
import SignUpUser from "../../components/common/SignUpUser";
import VerifyEmailUser from "../../components/VerifyEmailUser";
import DashBoard from "../../pages/main-web/DashBoard";
import DashboardTable from "../../components/DashBoardTable";
import LandingPage from "../../pages/main-web/LandingPage";
import ProtectedRoute from "../../components/ProtectedRoute";
import FactorOne from '../../components/FectorOne';

const UserLogin = () => {
  const { isSignedIn } = useUser(); // Get the user's signed-in state from Clerk
  const navigate = useNavigate(); // Initialize the navigate hook for redirection

  if (isSignedIn) {
    navigate("/dashboard", { replace: true });
    return null; 
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardTable />} />
        </Route>

        {/* Sign-In Route */}
        <Route path="/sign-in" element={<SignInUser />}>
          <Route path="factor-one" element={<FactorOne />} />
        </Route>

        {/* Sign-Up Route */}
        <Route path="/sign-up" element={<SignUpUser />}>
          <Route path="verify-email-address" element={<VerifyEmailUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default UserLogin;
