import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import excelJS from "exceljs";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const __dirname = path.resolve(); // Get the root directory

// Ensure data directory exists
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  console.log("📂 'data' directory created.");
} else {
  console.log("📂 'data' directory already exists.");
}

// Endpoint to save data to Excel
app.post("/save-excel", async (req, res) => {
  try {
    const { parentName, parentPhone, studentName, studentClass, subject, level, groupSize, question } = req.body;

    // **🔹 Fix: Ensure all fields exist and are non-empty (trimmed)**
    if (
      !parentName?.trim() ||
      !parentPhone?.trim() ||
      !studentName?.trim() ||
      !studentClass?.trim() ||
      !subject?.trim() ||
      !level?.trim() ||
      !groupSize?.trim() ||
      !question?.trim()
    ) {
      console.log("❌ ERROR: Some fields are missing or empty.");
      return res.status(400).json({ message: "All fields are required." });
    }

    const filePath = path.join(dataDir, "registrations.xlsx");

    // Create workbook and sheet
    const workbook = new excelJS.Workbook();
    let worksheet;

    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet("Registrations");
    } else {
      worksheet = workbook.addWorksheet("Registrations");
      worksheet.addRow(["Parent Name", "Parent Phone", "Student Name", "Student Class", "Subject", "Level", "Group Size", "Question"]);
    }

    // Add new data row
    worksheet.addRow([parentName.trim(), parentPhone.trim(), studentName.trim(), studentClass.trim(), subject.trim(), level.trim(), groupSize.trim(), question.trim()]);

    // Save the file
    await workbook.xlsx.writeFile(filePath);

    console.log("✅ Data saved successfully!");
    res.status(200).json({ message: "Data saved to Excel successfully!" });
  } catch (error) {
    console.error("❌ ERROR:", error.message);
    res.status(500).json({ message: "Error saving data" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
