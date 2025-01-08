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





import  { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";  // Import Clerk's useClerk hook
import SignInUser from "../../components/SignInUser";
import SignUpUser from "../../components/common/SignUpUser";
import VerifyEmailUser from "../../components/VerifyEmailUser";
import DashBoard from "../../pages/main-web/DashBoard";
import DashboardTable from "../../components/DashBoardTable";
import ProtectedRoute from "../../components/ProtectedRoute";
import FactorOne from '../../components/FectorOne';

const UserLogin = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useClerk(); // Check if the user is signed in

  useEffect(() => {
    // If the user is signed in, redirect to /dashboard
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]); 

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
          <Route index element={<DashboardTable />} />
        </Route>
        <Route path="/sign-in" element={<SignInUser />}>
          <Route path="factor-one" element={<FactorOne />} />
        </Route>
        <Route path="/sign-up" element={<SignUpUser />}>
          <Route path="verify-email-address" element={<VerifyEmailUser />} />
        </Route>

        <Route
          path="*"
          element={(
            <RedirectToSignIn />
          )}
        />

      </Routes>
    </div>
  );
};


const RedirectToSignIn = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/sign-in");  // Redirect to sign-in page
  }, [navigate]);

  return null; // Return nothing since we just redirect
};


export default UserLogin;

