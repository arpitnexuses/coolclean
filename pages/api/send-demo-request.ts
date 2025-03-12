import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, company, email, phone, jobTitle, interestArea } = req.body

    // Email content with enhanced design
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_TO,
      subject: 'New Demo Request',
      html: `
        <div style="
          max-width: 600px;
          margin: 0 auto;
          padding: 40px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1a1a1a;
        ">
          <!-- Header Section -->
          <div style="
            text-align: center;
            margin-bottom: 40px;
            padding: 24px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 10px;
          ">
            <img 
              src="https://www.coolclean.com/wp-content/uploads/2023/12/logo.png"
              alt="Company Logo"
              style="
                max-width: 180px;
                height: auto;
                margin-bottom: 0;
              "
            />
          </div>

          <!-- Title Section -->
          <div style="
            text-align: left;
            margin-bottom: 35px;
            padding-bottom: 25px;
            border-bottom: 1px solid #e9ecef;
          ">
            <h1 style="
              color: #0a2540;
              font-size: 28px;
              font-weight: 600;
              margin: 0 0 12px 0;
              letter-spacing: -0.5px;
            ">New Demo Request Received</h1>
            <p style="
              color: #64748b;
              font-size: 16px;
              margin: 0;
              line-height: 1.5;
            ">A new client has expressed interest in our services.</p>
          </div>

          <!-- Details Section -->
          <div style="
            margin-bottom: 35px;
            padding: 25px;
            background-color: #f8fafc;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
          ">
            <div style="margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="
                    padding: 12px 0;
                    color: #334155;
                    font-size: 15px;
                    border-bottom: 1px solid #e2e8f0;
                  ">
                    <span style="font-weight: 600; color: #0f172a; display: inline-block; width: 120px;">Name:</span>
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="
                    padding: 12px 0;
                    color: #334155;
                    font-size: 15px;
                    border-bottom: 1px solid #e2e8f0;
                  ">
                    <span style="font-weight: 600; color: #0f172a; display: inline-block; width: 120px;">Company:</span>
                    ${company}
                  </td>
                </tr>
                <tr>
                  <td style="
                    padding: 12px 0;
                    color: #334155;
                    font-size: 15px;
                    border-bottom: 1px solid #e2e8f0;
                  ">
                    <span style="font-weight: 600; color: #0f172a; display: inline-block; width: 120px;">Email:</span>
                    ${email}
                  </td>
                </tr>
                <tr>
                  <td style="
                    padding: 12px 0;
                    color: #334155;
                    font-size: 15px;
                    border-bottom: 1px solid #e2e8f0;
                  ">
                    <span style="font-weight: 600; color: #0f172a; display: inline-block; width: 120px;">Phone:</span>
                    ${phone}
                  </td>
                </tr>
                <tr>
                  <td style="
                    padding: 12px 0;
                    color: #334155;
                    font-size: 15px;
                    border-bottom: 1px solid #e2e8f0;
                  ">
                    <span style="font-weight: 600; color: #0f172a; display: inline-block; width: 120px;">Job Title:</span>
                    ${jobTitle}
                  </td>
                </tr>
                <tr>
                  <td style="
                    padding: 12px 0;
                    color: #334155;
                    font-size: 15px;
                  ">
                    <span style="font-weight: 600; color: #0f172a; display: inline-block; width: 120px;">Interest Area:</span>
                    ${interestArea}
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Action Section -->
          <div style="
            margin-top: 35px;
            padding: 25px;
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border-radius: 10px;
            text-align: left;
          ">
            <h2 style="
              color: #0369a1;
              font-size: 20px;
              font-weight: 600;
              margin: 0 0 15px 0;
            ">Next Steps</h2>
            <p style="
              color: #0c4a6e;
              font-size: 15px;
              line-height: 1.6;
              margin: 0;
            ">
              Our team will review this request and reach out to the client within one business day to schedule a personalized demo session.
            </p>
          </div>

          <!-- Footer -->
          <div style="
            margin-top: 35px;
            text-align: center;
            color: #64748b;
            font-size: 13px;
            border-top: 1px solid #e9ecef;
            padding-top: 25px;
          ">
            <p style="margin: 0; line-height: 1.6;">This is an automated notification from our system.</p>
            <p style="margin: 5px 0 0 0; line-height: 1.6;">Please do not reply to this email.</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.status(200).json({ message: 'Demo request sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Error sending demo request' })
  }
} 