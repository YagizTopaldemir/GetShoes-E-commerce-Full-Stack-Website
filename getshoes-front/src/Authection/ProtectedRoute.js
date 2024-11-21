import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider.js";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }



  return children;
};

export default ProtectedRoute;
