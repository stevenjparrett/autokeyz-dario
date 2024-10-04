import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3001;

const EMAIL_USER = process.env.EMAIL_USER || "autokeyzjobs@outlook.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "AutoKeyZz534?";

app.use(cors({
  origin: 'http://195.224.78.50  ', // Adjust this to match the client origin
  methods: ['POST'], // Allow only POST method from the client
  credentials: true // This allows session cookies from the client
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/contact', async (req, res) => {
  const { name, email, postcode, phoneNumber, vehicleModel, vehicleRegistration, message, isVehicleLocked, doesVehicleRunAndDrive } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: 'sales@autokeyz.co.uk',
    subject: '⚠️ New Job ⚠️',
    text: `Name: ${name}\nEmail: ${email}\nPost Code: ${postcode}\nPhone Number: ${phoneNumber}\nVehicle Model: ${vehicleModel}\nVehicle Registration: ${vehicleRegistration}\nIs Vehicle Locked? ${isVehicleLocked}\nDoes Vehicle Run And Drive? ${doesVehicleRunAndDrive}\nMessage: ${message}`
  };

  try {
    const sendMailResponse = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', sendMailResponse);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email: ');
  }
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
