import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import AdmitCard from "./pages/AdmitCard";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useContext } from "react";
import { authDataContext } from "./context/AuthContext";

// PrivateRoute component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(authDataContext);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    
      <div className="flex flex-col min-h-screen">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />             {/* Home */}
            <Route path="/about" element={<About />} />       {/* About */}
            <Route path="/contact" element={<Contact />} />   {/* Contact */}
            <Route
              path="/apply"
              element={
                <PrivateRoute>
                  <Apply />
                </PrivateRoute>
              }
            />       
            <Route path="/admit-card" element={<AdmitCard />} /> {/* Admit Card */}
            <Route path="/login" element={<Login />} />       {/* Login */}
            <Route path="/register" element={<Register />} /> {/* Signup */}
          </Routes>
        </main>

       
        <Footer />
      </div>
    
  );
}

export default App;
