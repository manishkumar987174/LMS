import { useState } from "react";
import Layout from "../../components/Layout";

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Draft");

  const addCourse = () => {
    const newCourse = {
      id: Date.now(),
      title,
      instructor,
      price,
      status
    };
    setCourses([...courses, newCourse]);
    setTitle("");
    setInstructor("");
    setPrice("");
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <Layout>
      <h1 className="page-title">Manage Courses</h1>

      {/* Add Course */}
      <div className="box">
        <h3>Add New Course</h3>
        <input
          placeholder="Course Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="Instructor"
          value={instructor}
          onChange={e => setInstructor(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        
        <button onClick={addCourse}>Create Course</button>
      </div>

      {/* Course List */}
      <div className="box">
        <h3>All Courses</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(c => (
              <tr key={c.id}>
                <td>{c.id.toString().slice(-5)}</td>
                <td>{c.title}</td>
                <td>{c.instructor}</td>
                <td>₹ {c.price}</td>
                <td>
                  <button onClick={() => deleteCourse(c.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {courses.length === 0 && (
          <p style={{ opacity: 0.6 }}>
            No courses added yet.
          </p>
        )}
      </div>
    </Layout>
  );
}

export default ManageCourses;
