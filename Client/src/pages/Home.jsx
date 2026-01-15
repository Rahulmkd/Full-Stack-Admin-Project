import { useAuth } from "../store/Auth";

export const Home = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Greeting Section */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            👋 Hi, {isLoggedIn ? user.username : "Guest"}!
          </h1>
          <p className="text-gray-700 mt-2">
            Welcome to your dashboard. We’re glad to have you here.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              🚀 Getting Started
            </h2>
            <p className="text-gray-700 mt-2">
              Explore the platform and start building amazing features using
              modern technologies.
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              👤 Your Profile
            </h2>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Username:</span>{" "}
              {isLoggedIn ? user.username : "Not logged in"}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span>{" "}
              {isLoggedIn ? user.email : "—"}
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">📊 Activity</h2>
            <p className="text-gray-700 mt-2">
              Stay active and keep learning. Your recent activity will appear
              here.
            </p>
          </div>
        </div>

        {/* Conditional Section */}
        {!isLoggedIn && (
          <div className="mt-10 text-center bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">
              Join Us Today!
            </h2>
            <p className="text-gray-700 mt-2">
              Please register or login to unlock all features.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
