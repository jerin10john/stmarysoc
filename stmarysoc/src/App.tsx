import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/about/AboutPage';
import SaintsPage from './pages/about/SaintsPage';
import PatronSaintPage from './pages/about/PatronSaintPage';
import VicarPage from './pages/about/VicarPage';
import MalankaraPage from './pages/about/MalankaraPage';
import CommitteePage from './pages/about/CommitteePage';
import MMVSPage from './pages/spiritual/MMVSPage';
import SundaySchoolPage from './pages/spiritual/SundaySchoolPage';
import OCYMPage from './pages/spiritual/OCYMPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/saints" element={<SaintsPage />} />
          <Route path="about/patron-saint" element={<PatronSaintPage />} />
          <Route path="about/vicar" element={<VicarPage />} />
          <Route path="about/malankara" element={<MalankaraPage />} />
          <Route path="about/committee" element={<CommitteePage />} />
          <Route path="spiritual/mmvs" element={<MMVSPage />} />
          <Route path="spiritual/sunday-school" element={<SundaySchoolPage />} />
          <Route path="spiritual/ocym" element={<OCYMPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;