import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobOffersPage from './pages/JobOffersPage';
import PostOfferPage from './pages/PostOfferPage';
import SubmitCVPage from './pages/SubmitCVPage';
import RecruitersPage from './pages/RecruitersPage';
import AnimatorsPage from './pages/AnimatorsPage';
import ContactPage from './pages/ContactPage';
import StructuresListPage from './pages/StructuresListPage';
import LoginPage from './pages/AdminLoginPage';
import SignupPage from './pages/SignupPage';
import AccountPage from './pages/AccountPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import StructureEditPage from './pages/StructureEditPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminCVListPage from './pages/AdminCVListPage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/offres" element={<JobOffersPage />} />
              <Route path="/structures" element={<StructuresListPage />} />
              <Route path="/cv" element={<SubmitCVPage />} />
              <Route path="/espace-recruteurs" element={<RecruitersPage />} />
              <Route path="/espace-animateurs" element={<AnimatorsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/connexion" element={<LoginPage />} />
              <Route path="/inscription" element={<SignupPage />} />

              {/* User (Structure) Protected Routes */}
              <Route 
                path="/mon-compte" 
                element={
                  <ProtectedRoute>
                    <AccountPage />
                  </ProtectedRoute>
                } 
              />
               <Route 
                path="/publier" 
                element={
                  <ProtectedRoute>
                    <PostOfferPage />
                  </ProtectedRoute>
                } 
              />

              {/* Admin Protected Routes */}
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute adminOnly>
                    <AdminDashboardPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/cvs" 
                element={
                  <ProtectedRoute adminOnly>
                    <AdminCVListPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/structures/new" 
                element={
                  <ProtectedRoute adminOnly>
                    <StructureEditPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/structures/edit/:id" 
                element={
                  <ProtectedRoute>
                    <StructureEditPage />
                  </ProtectedRoute>
                } 
              />

            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AppProvider>
  );
};

export default App;