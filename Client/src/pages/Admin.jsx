import { useEffect } from "react";
import { useAuth } from "../store/Auth";

const URL = "http://localhost:8080/admin/users";

export const Admin = () => {
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-gray-800">👋 Hi,!</h1>
          <p className="text-gray-700 mt-2">Welcome to Admin Panel.</p>
        </div>

        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-8">
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              👤 Your Profile
            </h2>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Username:</span>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
