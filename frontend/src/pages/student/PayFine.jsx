import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import "../../styles/payFine.css";

function PayFine() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const fine = state?.fine || 0;

  const confirm = () => {
    alert("Transaction completed");
    navigate("/student/issues");
  };

  return (
    <Layout>
      <div className="payfine-wrapper">
        <h2>Fine Payment</h2>

        <p>Please confirm the transaction</p>

        <div className={`fine-amount ${fine > 0 ? "fine-warning" : ""}`}>
          ₹{fine}
        </div>

        {fine > 0 && (
          <div className="checkbox-box">
            <input type="checkbox" required />
            <span>Fine Paid</span>
          </div>
        )}

        <button className="confirm-btn" onClick={confirm}>
          Confirm
        </button>
      </div>
    </Layout>
  );
}

export default PayFine;
