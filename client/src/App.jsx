import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Home from "./pages/Home";
import PropertyDetails from "./features/home/PropertyDetails";
import SignUp from "../src/auth/SignUp";
import SignIn from "../src/auth/SignIn";
import ForgotPassword from "../src/auth/Forgotpassword";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Property Details Page */}
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
