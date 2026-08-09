import React from "react";
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Core Layout
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Page Views
import { Home } from "./pages/Home";
import { BlogArticle } from "./pages/BlogArticle";

// Helper component to enable key-based route exit/entry transitions
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Single Page Scroll layout */}
        <Route path="/" element={<Home />} />
        
        {/* Individual Blog Article View */}
        <Route path="/blog/:id" element={<BlogArticle />} />

        {/* Redirect subroutes to anchors on the Home page */}
        <Route path="/about" element={<Navigate to="/?scroll=about" replace />} />
        <Route path="/skills" element={<Navigate to="/?scroll=skills" replace />} />
        <Route path="/projects" element={<Navigate to="/?scroll=projects" replace />} />
        <Route path="/experience" element={<Navigate to="/?scroll=experience" replace />} />
        <Route path="/certifications" element={<Navigate to="/?scroll=certifications" replace />} />
        <Route path="/achievements" element={<Navigate to="/?scroll=achievements" replace />} />
        <Route path="/blog" element={<Navigate to="/?scroll=blog" replace />} />
        <Route path="/contact" element={<Navigate to="/?scroll=contact" replace />} />

        {/* Fallback route redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-sand-50 selection:bg-sand-200 selection:text-brown-accent">
        {/* Navigation header */}
        <Navbar />

        {/* Dynamic page content wrapper */}
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        {/* Footer info */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
