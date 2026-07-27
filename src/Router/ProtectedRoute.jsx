import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
