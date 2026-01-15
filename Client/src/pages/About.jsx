import { useAuth } from "../store/Auth";

export const About = () => {
  const { user } = useAuth();

  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Glass Card */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About Our Application
          </h1>

          {/* Welcome */}
          {user && (
            <p className="text-gray-700 mb-6">
              👋 Welcome back,{" "}
              <span className="font-semibold text-blue-600">
                {user.username || "User"}
              </span>
              !
            </p>
          )}

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            This application is a modern full-stack project built to demonstrate
            secure authentication, clean UI design, and scalable architecture.
            It is designed with a focus on performance, simplicity, and user
            experience.
          </p>

          {/* Features */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Key Features
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 mb-6">
            <li className="bg-white/40 rounded-xl p-4">
              🔐 Secure authentication using JWT
            </li>
            <li className="bg-white/40 rounded-xl p-4">
              ⚛️ Built with React & modern hooks
            </li>
            <li className="bg-white/40 rounded-xl p-4">
              🎨 Glassmorphism UI using Tailwind CSS
            </li>
            <li className="bg-white/40 rounded-xl p-4">
              🚀 Fast and scalable backend integration
            </li>
          </ul>

          {/* Tech Stack */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-600/80 text-white rounded-full text-sm">
              React
            </span>
            <span className="px-4 py-2 bg-green-600/80 text-white rounded-full text-sm">
              Node.js
            </span>
            <span className="px-4 py-2 bg-yellow-500/80 text-white rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-purple-600/80 text-white rounded-full text-sm">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-gray-800/80 text-white rounded-full text-sm">
              MongoDB
            </span>
          </div>

          {/* Closing */}
          <p className="text-gray-700 leading-relaxed">
            This project is continuously evolving as new features and
            improvements are added. It reflects best practices in full-stack
            development and modern UI design.
          </p>
        </div>
      </div>
    </section>
  );
};
