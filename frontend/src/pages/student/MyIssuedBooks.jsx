import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";
import "../../styles/issuedBooks.css";
import { useNavigate } from "react-router-dom";

function MyIssuedBooks() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    api.get("/issue/my").then((res) => setIssues(res.data));
  }, []);

//   const returnBook = async (id) => {
//   try {
//     const res = await api.post("/issue/return/" + id);
//     console.log("RETURN RESPONSE:", res.data);
//     alert("Returned. Fine: ₹" + res.data.fine);
//     window.location.reload();
//   } catch (err) {
//     console.log("RETURN ERROR:", err.response?.data || err);
//     alert("Return failed");
//   }
// };


const navigate = useNavigate();
const returnBook = async (id) => {
  try {
    const res = await api.post("/issue/return/" + id);

    console.log("RETURN RESPONSE:", res.data);

    // 🔥 Redirect to Pay Fine page
    navigate("/student/pay-fine", {
      state: {
        issueId: id,
        fine: res.data.fine
      }
    });

  } catch (err) {
    console.log("RETURN ERROR:", err.response?.data || err);
    alert("Return failed");
  }
};


  return (
    <Layout>
      <div className="issued-container">
        <h2 className="page-title">My Issued Books</h2>

        <table className="issued-table">
          <thead>
            <tr>
              <th>Book</th>
              <th>Author</th>
              <th>Issue Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((i) => {
              const isLate = new Date(i.returnDate) < new Date();
              return (
                <tr key={i._id}>
                  <td>{i.bookId.title}</td>
                  <td>{i.bookId.author}</td>
                  <td>{new Date(i.issueDate).toDateString()}</td>
                  <td>{new Date(i.returnDate).toDateString()}</td>
                  <td>
                    <span
                      className={`badge ${isLate ? "badge-due" : "badge-active"}`}
                    >
                      {isLate ? "Overdue" : "Active"}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => returnBook(i._id)}>Return</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default MyIssuedBooks;
