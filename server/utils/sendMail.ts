import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = async (data: any) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TARGET_EMAIL,
    subject: `New Sponsor Inquiry from ${data.name}`,
    html: `
      <h2>${data.type}</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Type:</strong> ${data.type}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};
