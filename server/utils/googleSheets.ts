import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// Authenticate using inline credentials from .env
const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});


export const appendToSheet = async (data: {
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
}) => {
  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });

  const values = [
    [
      data.name,
      data.email,
      data.company,
      data.type,
      data.message,
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: "Sheet1!A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values,
    },
  });
};
