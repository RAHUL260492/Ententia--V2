import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/Home';
import SolutionsPage from './pages/Solutions';
import ServicesPage from './pages/Services';
import FoundationPage from './pages/Foundation';
import CaseStudiesPage from './pages/CaseStudies';
import InsightsPage from './pages/Insights';
import ContactPage from './pages/Contact';
import { Solution } from './types';
import SharedComponents from './components/SharedComponents';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppContent() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-textMain selection:bg-primary/30 font-sans">
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onSolutionSelect={setSelectedSolution} />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Modals */}
      {selectedSolution && (
        <SharedComponents.SolutionDetailModal
          solution={selectedSolution}
          isOpen={!!selectedSolution}
          onClose={() => setSelectedSolution(null)}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
