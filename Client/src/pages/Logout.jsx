import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

export const Logout = () => {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    LogoutUser();

    const timer = setTimeout(() => {
      navigate("/login");
    }, 1200);

    return () => clearTimeout(timer);
  }, [LogoutUser, navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl px-10 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Logging Out</h1>
        <p className="text-gray-700">
          Please wait while we securely log you out...
        </p>

        {/* Loader */}
        <div className="mt-4 flex justify-center">
          <div className="h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </section>
  );
};
