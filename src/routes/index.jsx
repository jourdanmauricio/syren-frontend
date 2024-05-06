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
          path="/syren-frontend/"
          element={<HomePage />}
        ></Route>
        <Route
          path="/syren-frontend/my-appointments"
          element={
            <AuthRoute>
              <MyAppointmentsPage />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/syren-frontend/new-appointment"
          element={
            <AuthRoute>
              <NewAppointmentPage />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/syren-frontend/register"
          element={<RegisterPage />}
        ></Route>
        <Route
          path="/syren-frontend/login"
          element={
            <AuthRouteLogin>
              <LoginPage />
            </AuthRouteLogin>
          }
        ></Route>
        <Route
          path="/syren-frontend/profile"
          element={
            <AuthRoute>
              <ProfilePage />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/syren-frontend/recovery-password"
          element={
            <AuthRouteLogin>
              <RecoveryPasswordPage />
            </AuthRouteLogin>
          }
        ></Route>
        <Route
          path="/syren-frontend/forgot-password"
          element={
            <AuthRouteLogin>
              <ForgotPassPage />
            </AuthRouteLogin>
          }
        ></Route>
        <Route
          path="/syren-frontend/about"
          element={<AboutPage />}
        ></Route>
        <Route
          path="/syren-frontend/treatments"
          element={<TreatmentsPage />}
        ></Route>
        <Route
          path="/syren-frontend/contact"
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
