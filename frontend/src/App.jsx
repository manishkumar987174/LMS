import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import StudentDashboard from "./pages/student/StudentDashboard.jsx";
import MyIssuedBooks from "./pages/student/MyIssuedBooks";
import PayFine from "./pages/student/PayFine.jsx";
import StudentReports from "./pages/student/StudentReports.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ManageBooks from "./pages/admin/ManageBooks.jsx";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageEnrollments from "./pages/admin/ManageEnrollments";
import IssueBook from "./pages/admin/IssueBook.jsx";
import AdminReports from "./pages/admin/AdminReports.jsx";

import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/student"
          element={
            <PrivateRoute>
              <StudentDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/student/issues"
          element={
            <PrivateRoute>
              <MyIssuedBooks />
            </PrivateRoute>
          }
        />

        <Route
          path="/student/pay-fine"
          element={
            <PrivateRoute>
              <PayFine />
            </PrivateRoute>
          }
        />

        <Route
          path="/student/reports"
          element={
            <PrivateRoute>
              <StudentReports />
            </PrivateRoute>
          }
        />

        {/*  ADMIN  */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/books"
          element={
            <PrivateRoute>
              <ManageBooks />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <PrivateRoute>
              <AdminReports />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <PrivateRoute>
              <ManageCourses />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <PrivateRoute>
              <ManageUsers />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/enrollments"
          element={
            <PrivateRoute>
              <ManageEnrollments />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/issue"
          element={
            <PrivateRoute>
              <IssueBook />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
