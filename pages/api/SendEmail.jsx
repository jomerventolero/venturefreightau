// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Define SMTP server configuration
const transporter = nodemailer.createTransport({
    host: 'mail.mybespokestaff.com', // Your SMTP server host
    port: 465, // Port for secure SMTP (465 for SSL)
    secure: true, // Set to true if using SSL
    auth: {
        user: 'admin@mybespokestaff.com', // Your email address
        pass: process.env.NEXT_PRIVATE_NODEMAILER_PASSWORD // Your email password
    }
});

// Define function to send email
async function sendEmail(sender, subject, text) {
    try {

        // Send email
        await transporter.sendMail({
            from: sender, // Sender address
            to: 'info@mybespokestaff.com', // Recipient address
            subject: subject, // Email subject
            text: text // Email body
        });
        console.log('Email sent successfully');

    } catch (error) {

        console.error('Error sending email:', error);
        
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { to, subject, body } = req.body;
  
      try {
        // Call the sendEmail function with the provided email details
        await sendEmail(to, subject, body);
        res.status(200).json({ message: 'Email sent successfully!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }