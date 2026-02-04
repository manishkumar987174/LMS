const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ================= ROUTES =================
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/institute", require("./routes/instituteRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/course", require("./routes/courseRoutes"));
app.use("/api/enroll", require("./routes/enrollRoutes"));
app.use("/api/issue", require("./routes/issueRoutes")); // 👈 THIS
app.use("/api/certificate", require("./routes/certificateRoutes"));
app.use("/api/test", require("./routes/testRoutes"));
// =========================================

// MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/library_saas")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

// Health check
app.get("/", (req, res) => {
  res.send("Library SaaS Backend Running 🚀");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
