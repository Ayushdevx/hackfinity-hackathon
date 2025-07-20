import express from "express";
import { sendMail } from "../utils/sendMail";
import { appendToSheet } from "../utils/googleSheets";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    // Save to Google Sheets
    await appendToSheet(data);

    // Send confirmation email
    await sendMail(data);

    res.status(200).json({ message: "Submission successful!" });
  } catch (error) {
    console.error("Sponsor form error:", error);
    res.status(500).json({ message: "Submission failed.",
     });
  }
});

export default router;
