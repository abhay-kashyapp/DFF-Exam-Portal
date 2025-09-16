// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Apply from "./pages/Apply";       // ✅ make sure you create Apply.jsx inside /pages
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Global Header */}
//         <Header />

//         {/* Page Content */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />          {/* Home */}
//             <Route path="/about" element={<About />} />    {/* About */}
//             <Route path="/contact" element={<Contact />} />{/* Contact */}
//             <Route path="/apply" element={<Apply />} />    {/* Apply */}
//             <Route path="/login" element={<Login />} />    {/* Login */}
//             <Route path="/register" element={<Register />} />{/* Signup */}
//           </Routes>
//         </main>

//         {/* Global Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";       // ✅ Application Page
import AdmitCard from "./pages/AdmitCard"; // ✅ Admit Card Page
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />             {/* Home */}
            <Route path="/about" element={<About />} />       {/* About */}
            <Route path="/contact" element={<Contact />} />   {/* Contact */}
            <Route path="/apply" element={<Apply />} />       {/* Apply */}
            <Route path="/admit-card" element={<AdmitCard />} /> {/* Admit Card */}
            <Route path="/login" element={<Login />} />       {/* Login */}
            <Route path="/register" element={<Register />} /> {/* Signup */}
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
