import nodemailer from "nodemailer";

export const mailService = async (data) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailDetails = {
    from: process.env.EMAIL_USER,
    to: data.to,
    subject: data.subject,
    html: `<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome New Client</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: #ffffff;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #333;
        }
        .content {
            padding: 20px 0;
        }
        .button {
            display: inline-block;
            background-color: #4CAF50;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            border-top: 1px solid #333;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to Grapha</h1>
        </div>
        <div class="content">
            <p>Dear ${data.name},</p>
            <p>We are thrilled to welcome you as a new client to Grapha. Thank you for choosing us as your partner in social media management.</p>
            <p>Here are a few things you can expect from us:</p>
            <ul>
                <li>Dedicated support from our team</li>
                <li>Regular updates on your projects</li>
      
            </ul>
        
            <p>If you want book any of our services , please send us confirmation email.</p>    
            <p>If you have any questions or need assistance, please don't hesitate to reach out to our support team.</p>
            <p>We look forward to a successful partnership!</p>
            <p>Best regards, </br> Grapha Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Grapha. All rights reserved.</p>
            <p>India</p>
        </div>
    </div>
</body>
</html>`,
  };

  try {
    await mailTransporter.sendMail(mailDetails);
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error Occurs", err.message);
    throw err; // Re-throw the error for the caller to handle
  }
};

export const mailServiceToGrapha = async (data) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailDetails = {
    from: process.env.EMAIL_USER,
    to: data.to,
    subject: data.subject,
    html: `<!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                </head>
                   <body>
                   <h1>${data.title}</h1>
                  <h1>Hi, we received new inquiry for Grapha from ${data.name} of ${data.country} </h1>
                   <h5>${data.email}</h5><br />
                    <h5>${data.mobileNo}</h5><br />
                  <h5>${data.message}</h5><br />
                  </body>
              </html>`,
  };

  try {
    await mailTransporter.sendMail(mailDetails);
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error Occurs", err.message);
    throw err; // Re-throw the error for the caller to handle
  }
};
