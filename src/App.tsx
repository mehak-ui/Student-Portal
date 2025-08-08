import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout.tsx';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard.tsx';
import Landing from './pages/Landing.tsx';

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />

      {/* Landing page for unauthenticated users */}
      <Route path="/" element={user ? (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ) : (
        <Landing />
      )}>
        {/* Nested routes for authenticated users */}
        {user && (
          <>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="dashboard" element={<Dashboard />} />
          </>
        )}
      </Route>

      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;