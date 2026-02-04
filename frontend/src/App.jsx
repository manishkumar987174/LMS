import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import StudentDashboard from "./pages/student/StudentDashboard.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ManageBooks from "./pages/admin/ManageBooks.jsx";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageEnrollments from "./pages/admin/ManageEnrollments";
import IssueBook from "./pages/admin/IssueBook.jsx";
import MyIssuedBooks from "./pages/student/MyIssuedBooks";

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
          path="/admin/issue"
          element={
            <PrivateRoute>
              <IssueBook />
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
          path="/student/issues"
          element={
            <PrivateRoute>
              <MyIssuedBooks />
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
          path="/admin/books"
          element={
            <PrivateRoute>
              <ManageBooks />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
