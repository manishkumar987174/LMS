import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";

function IssueBook() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [userId, setUserId] = useState("");
  const [bookId, setBookId] = useState("");

  useEffect(() => {
    api.get("/auth/users").then(res => setUsers(res.data));
    api.get("/books/all").then(res => setBooks(res.data));
  }, []);

 const issue = async () => {
  if (!userId || !bookId) {
    alert("Please select user and book");
    return;
  }

  try {
    const res = await api.post("/issue/admin/issue", {
      userId,
      bookId,
      issueDate: new Date(),
      returnDate: new Date(Date.now() + 15*24*60*60*1000),
      remarks: ""
    });

    alert("Book issued successfully!");
  } catch (err) {
    alert("Issue failed");
  }
};


  return (
    <Layout >
      <h2 style={{color:"black"}}>Issue Book (Admin)</h2>

      <select onChange={e => setUserId(e.target.value)}>
        <option>Select User</option>
        {users.map(u => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>

      <select onChange={e => setBookId(e.target.value)}>
        <option>Select Book</option>
        {books.map(b => (
          <option key={b._id} value={b._id}>{b.title}</option>
        ))}
      </select>

      <button style={{marginTop:"10px"}} onClick={issue}>Issue Book</button>
    </Layout>
  );
}

export default IssueBook;
