const { loadEnvConfig } = require("@next/env");
const nodemailer = require("nodemailer");
const path = require("path");

// Load Next.js environment variables from the project root
const projectDir = path.resolve(__dirname, "..");
loadEnvConfig(projectDir);

async function main() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const adminEmail = process.env.ADMIN_EMAIL || "mokshagaya@gmail.com";

  console.log("----------------------------------------");
  console.log("Checking SMTP Configurations:");
  console.log(`SMTP Host: ${host}`);
  console.log(`SMTP Port: ${port}`);
  console.log(`SMTP User: ${user}`);
  console.log(`SMTP Pass: ${pass ? "**** (Length: " + pass.length + ")" : "(Empty)"}`);
  console.log(`Admin Recipient: ${adminEmail}`);
  console.log("----------------------------------------");

  if (!host || !user || !pass) {
    console.error("❌ ERROR: Missing SMTP configuration. Please make sure SMTP_HOST, SMTP_USER, and SMTP_PASS are set in .env.local");
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: host,
    port: parseInt(port || "465", 10),
    secure: port === "465",
    auth: {
      user: user,
      pass: pass,
    },
  });

  try {
    console.log("Verifying SMTP connection credentials...");
    await transporter.verify();
    console.log("✅ SUCCESS: SMTP server is ready and authenticated!");

    console.log(`Sending a test email to ${adminEmail}...`);
    const info = await transporter.sendMail({
      from: `"Moksha Gaya Test" <${user}>`,
      to: adminEmail,
      subject: "Moksha Gaya - SMTP Integration Test",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #faf8f5; border: 1px solid #efe9de; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #2c1a04; border-bottom: 2px solid #b17a20; padding-bottom: 10px;">SMTP Integration Test Successful</h2>
          <p>Pranam,</p>
          <p>This is an automated test email confirming that your Google App Password and SMTP email integration for <strong>Moksha Gaya</strong> are working correctly.</p>
          <p style="margin-top: 20px; font-style: italic; color: #b17a20;">Warm regards,<br>The Moksha Gaya Dev Team</p>
        </div>
      `,
    });

    console.log("✅ SUCCESS: Test email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("❌ ERROR: SMTP validation failed!");
    console.error(error);
    process.exit(1);
  }
}

main();
