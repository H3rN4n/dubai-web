// Use this is you want to use Gmail SMTP
//     let transporter = nodemailer.createTransport(
//             `smtps://${config.user}:${config.pass}@smtp.gmail.com`
//     );
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  // host: config.host,
  // port: config.port,
  host: "mail.dubai-latam.club", // Sender email smtp
  port: "465", // Sender email port
  secure: true,
  auth: {
    //   user: config.user,
    //   pass: config.pass,
    user: "internal@dubai-latam.club", // Sender email username
    pass: "O?%ia6v6Gfwz", // Sender email password
  },
  tls: {
    rejectUnauthorized: true,
  },
});

export default function handler(req, res) {
  return new Promise((resolve) => {
    switch (req.method) {
      case "POST":
      case "OPTION": {
        // Create reusable transporter object using the default SMTP transport

        const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;

        // Setup email settings
        let mailOptions = {
          // from: config.from,
          // to: config.to,
          // subject: config.subject,
          from: '"Contact Me" <noreply@example.com>', // Sender email address
          to: "internal@dubai-latam.club", // Your email address
          subject: "Contact Us", // Subject
          html: output,
        };

        // Send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            res.status(500).json({ error });
            resolve();
          }

          res.status(200).json({ info });
          resolve();
        });
      }
    }
    res.status(405).end();
    return resolve();
  });
}
