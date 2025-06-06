import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        setIsLoading(true);

        const token = localStorage.getItem("customerToken");
        console.log("Token from localStorage:", token); // Debugging log

        if (!token) {
          setUser(null);
          return;
        }

        const response = await fetch(
          `http://localhost:5050/api/auth/isloggedin`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = await response.json();
        console.log("Response from API:", data); // Debugging log

        if (!data.success) {
          localStorage.removeItem("customerToken");
          setUser(null);
        } else {
          setUser({ token, ...data.user });
        }
      } catch (error) {
        console.error("Error in checkUserStatus:", error); // Debugging log
        localStorage.removeItem("customerToken");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserStatus();
  }, []);
  
    const login = (token, userData) => {
      localStorage.setItem("customerToken", token);
      setUser({ token, ...userData });
    };
  
    const logout = () => {
      localStorage.removeItem("customerToken");
      setUser(null);
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout ,isLoading}}>
        {children}
      </AuthContext.Provider>
    );
  };
export const useAuth = () => useContext(AuthContext);
