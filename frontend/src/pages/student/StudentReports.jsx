import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";
import "../../styles/reports.css";
import { Doughnut } from "react-chartjs-2";
import jsPDF from "jspdf";
import "../../utils/chartSetup";

function StudentReports() {
  const [data, setData] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const loadReport = async () => {
    const res = await api.get("/reports/student", {
      params: { fromDate, toDate }
    });
    setData(res.data);
  };

  useEffect(() => {
    loadReport();
  }, []);

  if (!data) return <p style={{ padding: 20 }}>Loading...</p>;

  /* ===== Chart Data ===== */
  const chartData = {
    labels: ["Issued", "Returned"],
    datasets: [
      {
        data: [data.issued, data.returned],
        backgroundColor: ["#6366f1", "#22c55e"]
      }
    ]
  };

  /* ===== Export PDF ===== */
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Student Library Report", 20, 20);
    doc.text(`Books Issued: ${data.issued}`, 20, 40);
    doc.text(`Books Returned: ${data.returned}`, 20, 50);
    doc.text(`Total Fine Paid: ₹${data.totalFine}`, 20, 60);
    doc.save("student-report.pdf");
  };

  return (
    <Layout>
      <h2 className="page-title">My Library Report</h2>

      {/* ===== DATE FILTER ===== */}
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
        <button onClick={loadReport}>Apply Filter</button>
        <button className="pdf-btn" onClick={exportPDF}>
          Export PDF
        </button>
      </div>

      {/* ===== SUMMARY CARDS ===== */}
      <div className="report-grid">
        <div className="report-card">
          📘 Books Issued <b>{data.issued}</b>
        </div>
        <div className="report-card">
          ✅ Books Returned <b>{data.returned}</b>
        </div>
        <div className="report-card highlight">
          💰 Total Fine <b>₹{data.totalFine}</b>
        </div>
      </div>
      {/* ===== CHART ===== */}
      <div className="chart-box">
        <h3 className="page-title">My Reading Activity</h3>
        <Doughnut data={chartData} />
      </div>
    </Layout>
  );
}

export default StudentReports;
