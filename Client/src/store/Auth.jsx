import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const authorizationToken = `Bearer ${token}`;
  const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (!token) {
      setUser("");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8080/user", {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.userData);
        } else {
          LogoutUser(); // token invalid
        }
      } catch (error) {
        console.log("Error fetching user data", error);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storetokenInLS,
        LogoutUser,
        user,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
