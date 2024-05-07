import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// AdminRoute
import { AuthRouteLogin, AuthRoute } from '@/utils/auth';

// Routes
import HomePage from '@/views/HomePage/HomePage';
const MyAppointmentsPage = React.lazy(() =>
  import('@/views/MyAppointmentsPage/MyAppointmentsPage')
);
import RegisterPage from '@/views/RegisterPage/RegisterPage';
import LoginPage from '@/views/LoginPage/LoginPage';
import RecoveryPasswordPage from '@/views/RecoveryPasswordPage/RecoveryPasswordPage';
import ForgotPassPage from '@/views/ForgotPassPage/ForgotPassPage';
import ErrorPage from '@/views/ErrorPage/ErrorPage';
import NewAppointmentPage from '@/views/NewAppointmentPage/NewAppointmentPage';
import Spinner from '@/components/Spinner/Spinner';
import AboutPage from '@/views/AboutPage/AboutPage';
import ContactPage from '../views/ContactPage/ContactPage';
import TreatmentsPage from '../views/TreatmentsPage/TreatmentsPage';
const ProfilePage = React.lazy(() => import('@/views/ProfilePage/ProfilePage'));

function AppRoutes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        ></Route>
        <Route
          path="/my-appointments"
          element={
            <AuthRoute>
              <MyAppointmentsPage />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/new-appointment"
          element={
            <AuthRoute>
              <NewAppointmentPage />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={<RegisterPage />}
        ></Route>
        <Route
          path="/login"
          element={
            <AuthRouteLogin>
              <LoginPage />
            </AuthRouteLogin>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <ProfilePage />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/recovery-password"
          element={
            <AuthRouteLogin>
              <RecoveryPasswordPage />
            </AuthRouteLogin>
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={
            <AuthRouteLogin>
              <ForgotPassPage />
            </AuthRouteLogin>
          }
        ></Route>
        <Route
          path="/about"
          element={<AboutPage />}
        ></Route>
        <Route
          path="/treatments"
          element={<TreatmentsPage />}
        ></Route>
        <Route
          path="/contact"
          element={<ContactPage />}
        ></Route>
        <Route
          path="*"
          element={<ErrorPage />}
        ></Route>
      </Routes>
    </Suspense>
  );
}
export default AppRoutes;
