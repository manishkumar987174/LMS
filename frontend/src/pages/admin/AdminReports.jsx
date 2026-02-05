import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";
import "../../styles/reports.css";

function AdminReports() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/reports/admin").then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <Layout>
      <h2 className="page-title">Admin Reports</h2>

      <div className="report-grid">
        <div className="report-card">Total Users: {data.totalUsers}</div>
        <div className="report-card">Total Books: {data.totalBooks}</div>
        <div className="report-card">Issued Books: {data.issuedBooks}</div>
        <div className="report-card">Returned Books: {data.returnedBooks}</div>
        <div className="report-card">Total Fine: ₹{data.totalFine}</div>
      </div>
    </Layout>
  );
}

export default AdminReports;
