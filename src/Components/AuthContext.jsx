import { createContext, useContext, useState, useEffect } from "react";

// Create Auth Context
const AuthContext = createContext();

// AuthProvider to provide authentication context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // Function for logging in the user
  const login = (email, password) => {
    if (email === "test@example.com" && password === "password") {
      setUser({ email });
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  // Function for registering the user
  const register = (email, password) => {
    setUser({ email });
    return { success: true };
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
