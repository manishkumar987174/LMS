import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await api.get("/auth/users"); // backend se
    setUsers(res.data);
  };

  const toggleStatus = async (id) => {
    await api.put("/auth/toggle/" + id);
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Layout>
      <h1 className="page-title">User Management</h1>

      <div className="box">
        <h3>All Registered Users</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(u => (
              <tr key={u._id}>
                <td>{u._id.slice(-5)}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <span
                    style={{
                      color: u.active ? "#22c55e" : "#ef4444",
                      fontWeight: "bold"
                    }}
                  >
                    {u.active ? "Active" : "Blocked"}
                  </span>
                </td>
                <td>
                  <button onClick={() => toggleStatus(u._id)}>
                    {u.active ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default ManageUsers;
