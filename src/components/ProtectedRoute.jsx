/* eslint-disable react/prop-types */
import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
