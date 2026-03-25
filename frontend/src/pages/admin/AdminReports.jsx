import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";
import "../../styles/reports.css";
import { Bar } from "react-chartjs-2";
import jsPDF from "jspdf";
import "../../utils/chartSetup";

function AdminReports() {
  const [data, setData] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const loadReports = async () => {
    const res = await api.get("/reports/admin", {
      params: { fromDate, toDate }
    });
    setData(res.data);
  };

  useEffect(() => {
    loadReports();
  }, []);

  if (!data) return <p style={{ padding: 20 }}>Loading...</p>;

  
  const chartData = {
    labels: ["Issued", "Returned"],
    datasets: [
      {
        label: "Books",
        data: [data.issuedBooks, data.returnedBooks],
        backgroundColor: ["#6366f1", "#22c55e"]
      }
    ]
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Library Management - Admin Report", 20, 20);
    doc.text(`Total Users: ${data.totalUsers}`, 20, 40);
    doc.text(`Total Books: ${data.totalBooks}`, 20, 50);
    doc.text(`Issued Books: ${data.issuedBooks}`, 20, 60);
    doc.text(`Returned Books: ${data.returnedBooks}`, 20, 70);
    doc.text(`Total Fine: ₹${data.totalFine}`, 20, 80);
    doc.save("admin-report.pdf");
  };

  return (
    <Layout>
      <h2 className="page-title">Admin Reports</h2>

      <div className="filter-box">
        <input
          type="date"
          value={fromDate}
          onChange={e => setFromDate(e.target.value)}
        />
        <input
          type="date"
          value={toDate}
          onChange={e => setToDate(e.target.value)}
        />
        <button onClick={loadReports}>Apply Filter</button>
        <button onClick={exportPDF} className="pdf-btn">
          Export PDF
        </button>
      </div>

      {/* /* ANALYTICS CARDS  */ }
      <div className="report-grid">
        <div className="report-card">👥 Total Users <b>{data.totalUsers}</b></div>
        <div className="report-card">📚 Total Books <b>{data.totalBooks}</b></div>
        <div className="report-card">📖 Issued <b>{data.issuedBooks}</b></div>
        <div className="report-card">✅ Returned <b>{data.returnedBooks}</b></div>
        <div className="report-card highlight">
          💰 Total Fine <b>₹{data.totalFine}</b>
        </div>
      </div>

      <div className="chart-box">
        <h3 className="page-title">Books Statistics</h3>
        <Bar data={chartData} />
      </div>
    </Layout>
  );
}

export default AdminReports;
