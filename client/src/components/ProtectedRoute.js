import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("adminToken");

  if (!isLoggedIn) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default ProtectedRoute;