import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

// Warm gold and chocolate brown luxury template wrapper
function getHtmlWrapper(title: string, bodyContent: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
      </head>
      <body style="margin: 0; padding: 20px; background-color: #faf8f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #efe9de; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(44, 26, 4, 0.03);">
          <!-- Header Banner -->
          <div style="background-color: #2c1a04; padding: 30px; text-align: center; border-bottom: 3px solid #b17a20;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">Moksha Gaya</h1>
            <p style="color: #efe9de; margin: 5px 0 0 0; font-size: 11px; letter-spacing: 1px;">Priya Pitru Shraddh & Gaya Rites</p>
          </div>
          
          <!-- Body Content -->
          <div style="padding: 40px 30px; color: #2c1a04; line-height: 1.6; font-size: 14px;">
            ${bodyContent}
          </div>
          
          <!-- Footer -->
          <div style="background-color: #faf8f5; padding: 25px 30px; text-align: center; border-top: 1px solid #efe9de; font-size: 11px; color: #7c6954;">
            <p style="margin: 0 0 8px 0;">Moksha Gaya • Vishnupad Road, Gaya, Bihar</p>
            <p style="margin: 0;">Support: +91 7782099739 | <a href="mailto:shkshvm@gmail.com" style="color: #b17a20; text-decoration: none; font-weight: bold;">shkshvm@gmail.com</a></p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { leadId, name, phone, email, ritual, package: pkg, date, additionalInfo } = body;
    const origin = req.headers.get("origin") || "";

    // Devotee confirmation email content
    const devoteeHtmlBody = `
      <p>Pranam <strong>${name}</strong>,</p>
      <p>Thank you for contacting Moksha Gaya. We have received your enquiry for performing ancestral rites. Your details have been registered under Reference ID: <strong>${leadId}</strong>.</p>
      
      <div style="background-color: #faf8f5; border: 1px solid #efe9de; border-radius: 12px; padding: 20px; margin: 25px 0; font-size: 13px;">
        <p style="margin: 0 0 12px 0; font-weight: bold; color: #2c1a04; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Enquiry Details:</p>
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold; width: 35%;">Reference ID:</td>
            <td style="padding: 6px 0; font-weight: bold; color: #b17a20;">${leadId}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Ritual Service:</td>
            <td style="padding: 6px 0; font-weight: bold; color: #2c1a04;">${ritual}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Package Plan:</td>
            <td style="padding: 6px 0; font-style: italic; color: #b17a20; font-weight: 600;">${pkg}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Puja Date:</td>
            <td style="padding: 6px 0; color: #2c1a04;">${date}</td>
          </tr>
        </table>
      </div>
      
      <p>Our experienced Vedic coordinator will contact you on your mobile number (<strong>${phone}</strong>) or via WhatsApp within 2-4 hours to explain the exact puja procedure, temple coordinates, and custom logistics.</p>
      <p>May your ancestors achieve ultimate peace and Moksha in the holy land of Gaya.</p>
      <p style="margin-top: 30px; font-style: italic; color: #b17a20;">Warm regards,<br>The Moksha Gaya Team</p>
    `;
    const devoteeHtml = getHtmlWrapper("Thank You for Your Enquiry - Moksha Gaya", devoteeHtmlBody);

    // Admin alert email content
    const adminHtmlBody = `
      <p>Pranam Admin,</p>
      <p>A new lead has been registered on the Moksha Gaya portal. Below are the details:</p>
      
      <div style="background-color: #faf8f5; border: 1px solid #efe9de; border-radius: 12px; padding: 20px; margin: 25px 0; font-size: 13px;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold; width: 35%;">Reference ID:</td>
            <td style="padding: 6px 0; font-weight: bold; color: #b17a20;">${leadId}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Devotee Name:</td>
            <td style="padding: 6px 0; font-weight: bold; color: #2c1a04;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Mobile Number:</td>
            <td style="padding: 6px 0; font-weight: bold;"><a href="tel:${phone}" style="color: #b17a20; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Email Address:</td>
            <td style="padding: 6px 0; color: #2c1a04;">${email || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Ritual Service:</td>
            <td style="padding: 6px 0; color: #2c1a04;">${ritual}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Package Plan:</td>
            <td style="padding: 6px 0; color: #b17a20; font-style: italic; font-weight: 600;">${pkg}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">puja Date:</td>
            <td style="padding: 6px 0; color: #2c1a04;">${date}</td>
          </tr>
          ${additionalInfo ? `
          <tr>
            <td style="padding: 6px 0; color: #7c6954; font-weight: bold; vertical-align: top;">Additional Info:</td>
            <td style="padding: 6px 0; color: #2c1a04; white-space: pre-wrap;">${additionalInfo}</td>
          </tr>` : ""}
        </table>
      </div>
      
      <p>Log in to the <a href="${origin}/admin" style="color: #b17a20; text-decoration: underline; font-weight: bold;">Admin Console</a> to assign a coordinator, make notes, or update statuses.</p>
    `;
    const adminHtml = getHtmlWrapper("New Lead Received - Moksha Gaya", adminHtmlBody);

    const adminRecipient = process.env.ADMIN_EMAIL || "shkshvm@gmail.com";

    // 1. Resend Config
    const resendApiKey = process.env.RESEND_API_KEY;
    
    // 2. SMTP Config
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    let sentToDevotee = false;
    let sentToAdmin = false;

    if (resendApiKey) {
      console.log("Sending email using Resend...");
      const resend = new Resend(resendApiKey);

      // Send to Admin
      await resend.emails.send({
        from: "Moksha Gaya <enquiry@mokshagaya.com>", // Note: Resend requires domain verification to send from custom domain. 
        to: adminRecipient,
        subject: `New Lead Received: ${name} [${leadId}]`,
        html: adminHtml,
      });
      sentToAdmin = true;

      // Send to Devotee (if email exists)
      if (email) {
        await resend.emails.send({
          from: "Moksha Gaya <info@mokshagaya.com>",
          to: email,
          subject: "Thank You for Your Enquiry - Moksha Gaya",
          html: devoteeHtml,
        });
        sentToDevotee = true;
      }
    } else if (smtpHost && smtpUser && smtpPass) {
      console.log("Sending email using SMTP / Gmail...");
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort || "465", 10),
        secure: smtpPort === "465", // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // Send to Admin
      await transporter.sendMail({
        from: `"Moksha Gaya" <${smtpUser}>`,
        to: adminRecipient,
        subject: `New Lead Received: ${name} [${leadId}]`,
        html: adminHtml,
      });
      sentToAdmin = true;

      // Send to Devotee (if email exists)
      if (email) {
        await transporter.sendMail({
          from: `"Moksha Gaya" <${smtpUser}>`,
          to: email,
          subject: "Thank You for Your Enquiry - Moksha Gaya",
          html: devoteeHtml,
        });
        sentToDevotee = true;
      }
    } else {
      console.warn("No Email Provider environment variables configured. Running in Mock Console Log mode.");
      console.log("================= MOCK EMAIL FOR ADMIN =================");
      console.log(`To: ${adminRecipient}`);
      console.log(`Subject: New Lead Received: ${name} [${leadId}]`);
      console.log("HTML Body:");
      console.log(adminHtml);
      console.log("========================================================");

      if (email) {
        console.log("================ MOCK EMAIL FOR DEVOTEE ================");
        console.log(`To: ${email}`);
        console.log(`Subject: Thank You for Your Enquiry - Moksha Gaya`);
        console.log("HTML Body:");
        console.log(devoteeHtml);
        console.log("========================================================");
        sentToDevotee = true;
      }
      sentToAdmin = true;
    }

    return NextResponse.json({
      success: true,
      message: "Emails processed successfully",
      sentToAdmin,
      sentToDevotee,
      mode: (resendApiKey) ? "Resend" : (smtpHost) ? "SMTP" : "Mock"
    });
  } catch (error: any) {
    console.error("Email handler error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
