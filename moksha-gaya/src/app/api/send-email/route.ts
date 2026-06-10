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
            <p style="margin: 0 0 8px 0;">Moksha Gaya • Nawagarhi, {Anpurna Niwas - Pd. Sidhnath ji Dubhaliya}, Gaya ji, Bihar - 823001</p>
            <p style="margin: 0;">Support: +91 7070719993, +91 9905852715, +91 7277948658 | <a href="mailto:mokshagaya@gmail.com" style="color: #b17a20; text-decoration: none; font-weight: bold;">mokshagaya@gmail.com</a></p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { leadId, name, phone, email, ritual, package: pkg, date, additionalInfo, status } = body;
    const origin = req.headers.get("origin") || "";

    const isStatusChange = status === "Confirmed" || status === "Cancelled";
    let devoteeSubject = "Thank You for Your Enquiry - Moksha Gaya";
    let devoteeHtmlBody = "";

    if (status === "Confirmed") {
      devoteeSubject = "Booking Confirmed - Moksha Gaya";
      devoteeHtmlBody = `
        <p>Pranam <strong>${name}</strong>,</p>
        <p>We are pleased to inform you that your ritual booking for <strong>${ritual}</strong> has been <strong>Confirmed</strong>.</p>
        
        <div style="background-color: #faf8f5; border: 1px solid #efe9de; border-radius: 12px; padding: 20px; margin: 25px 0; font-size: 13px;">
          <p style="margin: 0 0 12px 0; font-weight: bold; color: #2c1a04; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Booking Details:</p>
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
            <tr>
              <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Status:</td>
              <td style="padding: 6px 0; color: #10b981; font-weight: bold; text-transform: uppercase;">Confirmed</td>
            </tr>
          </table>
        </div>
        
        <p>Our designated Vedic coordinator in Gaya is preparing the logistics, scheduling the pandas/priests, and arranging the necessary puja materials according to your selected package.</p>
        <p>A coordinator will connect with you via mobile or WhatsApp (<strong>${phone}</strong>) shortly to share details regarding the meeting venue, coordinates, and exact timings.</p>
        <p>If you have any queries or need to modify your booking, feel free to reply directly to this email or call our helpline.</p>
        <p>May your ancestors achieve ultimate peace and Moksha in the holy land of Gaya.</p>
        <p style="margin-top: 30px; font-style: italic; color: #b17a20;">Warm regards,<br>The Moksha Gaya Team</p>
      `;
    } else if (status === "Cancelled") {
      devoteeSubject = "Booking Cancelled/Postponed - Moksha Gaya";
      devoteeHtmlBody = `
        <p>Pranam <strong>${name}</strong>,</p>
        <p>This is to inform you that your ritual booking for <strong>${ritual}</strong> (Reference ID: <strong>${leadId}</strong>) has been marked as <strong>Cancelled/Postponed</strong>.</p>
        
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
            <tr>
              <td style="padding: 6px 0; color: #7c6954; font-weight: bold;">Status:</td>
              <td style="padding: 6px 0; color: #ef4444; font-weight: bold; text-transform: uppercase;">Cancelled/Postponed</td>
            </tr>
          </table>
        </div>
        
        <p>If this cancellation was made in error, or if you would like to reschedule the ritual to a different date or select another package, please contact us or reply directly to this email.</p>
        <p>We remain at your service to assist you and your family in performing these sacred duties for your ancestors.</p>
        <p style="margin-top: 30px; font-style: italic; color: #b17a20;">Warm regards,<br>The Moksha Gaya Team</p>
      `;
    } else {
      // Default: Devotee confirmation email content for initial inquiry
      devoteeHtmlBody = `
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
    }

    const devoteeHtml = getHtmlWrapper(devoteeSubject, devoteeHtmlBody);

    // Admin alert email content (only sent on initial inquiry)
    let adminHtml = "";
    if (!isStatusChange) {
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
      adminHtml = getHtmlWrapper("New Lead Received - Moksha Gaya", adminHtmlBody);
    }

    const adminRecipient = process.env.ADMIN_EMAIL || "mokshagaya@gmail.com";

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

      // Send to Admin (only for new enquiries)
      if (!isStatusChange) {
        await resend.emails.send({
          from: "Moksha Gaya <enquiry@mokshagaya.com>", // Note: Resend requires domain verification to send from custom domain. 
          to: adminRecipient,
          subject: `New Lead Received: ${name} [${leadId}]`,
          html: adminHtml,
        });
        sentToAdmin = true;
      }

      // Send to Devotee (if email exists)
      if (email) {
        await resend.emails.send({
          from: "Moksha Gaya <info@mokshagaya.com>",
          to: email,
          subject: devoteeSubject,
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

      // Send to Admin (only for new enquiries)
      if (!isStatusChange) {
        await transporter.sendMail({
          from: `"Moksha Gaya" <${smtpUser}>`,
          to: adminRecipient,
          subject: `New Lead Received: ${name} [${leadId}]`,
          html: adminHtml,
        });
        sentToAdmin = true;
      }

      // Send to Devotee (if email exists)
      if (email) {
        await transporter.sendMail({
          from: `"Moksha Gaya" <${smtpUser}>`,
          to: email,
          subject: devoteeSubject,
          html: devoteeHtml,
        });
        sentToDevotee = true;
      }
    } else {
      console.warn("No Email Provider environment variables configured. Running in Mock Console Log mode.");
      if (!isStatusChange) {
        console.log("================= MOCK EMAIL FOR ADMIN =================");
        console.log(`To: ${adminRecipient}`);
        console.log(`Subject: New Lead Received: ${name} [${leadId}]`);
        console.log("HTML Body:");
        console.log(adminHtml);
        console.log("========================================================");
        sentToAdmin = true;
      }

      if (email) {
        console.log("================ MOCK EMAIL FOR DEVOTEE ================");
        console.log(`To: ${email}`);
        console.log(`Subject: ${devoteeSubject}`);
        console.log("HTML Body:");
        console.log(devoteeHtml);
        console.log("========================================================");
        sentToDevotee = true;
      }
    }

    return NextResponse.json({
      success: true,
      message: "Emails processed successfully",
      sentToAdmin,
      sentToDevotee,
      mode: (resendApiKey) ? "Resend" : (smtpHost) ? "SMTP" : "Mock"
    });
  } catch (error: unknown) {
    console.error("Email handler error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
