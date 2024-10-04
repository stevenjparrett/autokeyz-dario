import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Fetch environment variables directly from Lambda
const secretArn = process.env.SECRET_ARN;
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const emailUser = process.env.EMAIL_USER;
const contactEmail = process.env.CONTACT_EMAIL;

// Define the validation schema using Zod
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  postCode: z.string().min(1, 'Post code is required'),
  vehicleModel: z.string().min(1, 'Vehicle model is required'),
  vehicleYear: z.string().min(1, 'Vehicle year is required'),
  message: z.string().optional(),
  isVehicleLocked: z.enum(['Yes', 'No']),
  doesVehicleRunAndDrive: z.enum(['Yes', 'No']),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the incoming data
    const parsedData = contactSchema.safeParse(body);
    if (!parsedData.success) {
      const errors = parsedData.error.errors.map(err => err.message).join(', ');
      return NextResponse.json(
        { success: false, error: errors },
        { status: 400 }
      );
    }

    // Use the environment variables in your Nodemailer configuration
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465, // true for port 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: emailUser, // Sender address (must be verified in SES or your SMTP service)
      to: contactEmail, // Receiver address
      subject: '⚠️ New Job ⚠️',
      text: `Name: ${parsedData.data.name}
      Email: ${parsedData.data.email}
      Post Code: ${parsedData.data.postCode}
      Phone Number: ${parsedData.data.phoneNumber}
      Vehicle Model: ${parsedData.data.vehicleModel}
      Vehicle Year: ${parsedData.data.vehicleYear}
      Is Vehicle Locked?: ${parsedData.data.isVehicleLocked}
      Does Vehicle Run And Drive?: ${parsedData.data.doesVehicleRunAndDrive}
      Message: ${parsedData.data.message || 'N/A'}`
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);

    // Respond back to the frontend
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', messageId: result.messageId },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}
