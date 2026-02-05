import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";

function Reports() {
  const [data, setData] = useState({});

  useEffect(() => {
    api.get("/reports").then(res => setData(res.data));
  }, []);

  return (
    <Layout>
      <h2>Reports</h2>

      <p>Total Issued: {data.totalIssued}</p>
      <p>Returned Books: {data.returned}</p>
      <p>Total Fine Collected: ₹{data.totalFine}</p>
    </Layout>
  );
}

export default Reports;
