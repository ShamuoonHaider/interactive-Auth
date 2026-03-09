import { Link } from "react-router-dom";
import { ToggleThemeBtn } from "./ToggleThemeBtn";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center m-5 border-b-2 border-gray-300 pb-3">
      <Link to="/">
        <h1 className="text-2xl font-bold">Brain Not Braining</h1>
      </Link>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <span className="text-sm font-medium">Hi, {user?.username}</span>
            <Link
              to="/dashboard"
              className="text-sm font-medium hover:underline"
            >
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="text-sm font-medium text-red-500 hover:underline cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm font-medium hover:underline">
              Login
            </Link>
            <Link to="/signup" className="text-sm font-medium hover:underline">
              Sign Up
            </Link>
          </>
        )}
        <ToggleThemeBtn />
      </div>
    </nav>
  );
};
