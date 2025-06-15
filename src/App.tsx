import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/client/Dashboard';
import Reports from './components/client/Reports';
import AdminDashboard from './components/admin/AdminDashboard';
import ReportManagement from './components/admin/ReportManagement';
import AddReport from './components/admin/AddReport';
import ProtectedRoute from './components/ProtectedRoute';

const AppContent: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Auth Routes */}
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to={user?.role === 'admin' ? '/admin/dashboard' : '/dashboard'} replace /> : <Login />} 
          />
          <Route 
            path="/register" 
            element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register />} 
          />
          
          {/* Client Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute requiredRole="client">
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/reports" 
            element={
              <ProtectedRoute requiredRole="client">
                <Reports />
              </ProtectedRoute>
            } 
          />
          
          {/* Admin Protected Routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/reports" 
            element={
              <ProtectedRoute requiredRole="admin">
                <ReportManagement />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/reports/new" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AddReport />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/reports/:id/edit" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AddReport />
              </ProtectedRoute>
            } 
          />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;