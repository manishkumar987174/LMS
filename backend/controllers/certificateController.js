const Certificate = require("../models/Certificate");
const Enrollment = require("../models/Enrollment");
const PDFDocument = require("pdfkit");
exports.generateCertificate = async (req, res) => {
  const { courseId } = req.body;

  const enrollment = await Enrollment.findOne({
    studentId: req.user.id,
    courseId,
    progress: 100
  }).populate("courseId");

  if (!enrollment)
    return res.status(400).json({ msg: "Course not completed" });

  const cert = await Certificate.create({
    studentId: req.user.id,
    courseId,
    instituteId: req.user.instituteId
  });

  // Create PDF
  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=certificate.pdf"
  );

  doc.pipe(res);

  doc.fontSize(22).text("CERTIFICATE OF COMPLETION", {
    align: "center"
  });

  doc.moveDown();
  doc.fontSize(14).text(
    `This is to certify that the student has successfully completed the course:`
  );

  doc.moveDown();
  doc.fontSize(18).text(enrollment.courseId.title, {
    align: "center"
  });

  doc.moveDown();
  doc.fontSize(14).text(
    `Issued on: ${new Date().toDateString()}`
  );

  doc.end();
};
