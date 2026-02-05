import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";
import "../../styles/reports.css";

function StudentReports() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/reports/student").then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <Layout>
      <h2 className="page-title">My Report</h2>

      <div className="report-grid">
        <div className="report-card">Books Issued: {data.issued}</div>
        <div className="report-card">Books Returned: {data.returned}</div>
        <div className="report-card">Fine Paid: ₹{data.totalFine}</div>
      </div>
    </Layout>
  );
}

export default StudentReports;
