import nodemailer from "nodemailer";
import dotenv from "dotenv";
import {renderTemplate} from './tamplateHandler.js' // fixed typo

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

async function sendTheMail(to, subject, templateName, templateData = {}) {
  try {
    const html = await renderTemplate(templateName, templateData);

    const info = await transporter.sendMail({
      from: `"My App" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Error sending email:", err);
    throw err;
  }
}

export { sendTheMail };
