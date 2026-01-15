import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? "text-white bg-blue-600/80"
        : "text-gray-800 hover:text-white hover:bg-blue-500/70"
    }`;

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-white/30 backdrop-blur-md border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold text-blue-600">MyApp</div>

            {/* Navigation */}
            <nav>
              <ul className="flex items-center space-x-4">
                <li>
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className={linkClass}>
                    About
                  </NavLink>
                </li>

                {isLoggedIn ? (
                  <>
                    <li>
                      <NavLink to="/admin" className={linkClass}>
                        Admin
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/logout" className={linkClass}>
                        Logout
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/registration" className={linkClass}>
                        Registration
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/login" className={linkClass}>
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
