import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Home from "./pages/Home";
import PropertyDetails from "./features/home/PropertyDetails";
import PopularProperties from "./components/PopularProperties";
import SignUp from "../src/auth/SignUp";
import SignIn from "../src/auth/SignIn";
import ForgotPassword from "../src/auth/Forgotpassword";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          <Route path="/popular-properties" element={<PopularProperties />} />
          {/* Property Details Page */}
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
