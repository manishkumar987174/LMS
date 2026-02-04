import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";

function ManageBooks() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");

  const loadBooks = async () => {
    const res = await api.get("/books/all");
    setBooks(res.data);
  };

  const addBook = async () => {
    await api.post("/books/add", {
      title,
      author,
      quantity
    });
    setTitle("");
    setAuthor("");
    setQuantity("");
    loadBooks();
  };

  const deleteBook = async (id) => {
    await api.delete("/books/" + id);
    loadBooks();
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Layout>
      <h2 style={{color:"black", font:"28px"}}>Manage Books</h2>

      {/* Add Book Form */}
      <div className="box">
        <h3>Add Book</h3>
        <input placeholder="Title" value={title}
          onChange={e => setTitle(e.target.value)} />
        <input placeholder="Author" value={author}
          onChange={e => setAuthor(e.target.value)} />
        <input placeholder="Quantity" value={quantity}
          onChange={e => setQuantity(e.target.value)} />
        <button onClick={addBook}>Add</button>
      </div>

      {/* Book List */}
      <div className="box">
        <h3>All Books</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map(b => (
              <tr key={b._id}>
                <td>{b._id.slice(-5)}</td>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.quantity}</td>
                <td>
                  <button onClick={() => deleteBook(b._id)}>
                    Delete
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

export default ManageBooks;
