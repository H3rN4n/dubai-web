const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  env: {
    customKey: "my-value",
    corsOptions: {
      origin: "https://yourdomain.com",
      whitelist: ["https://hcaptcha.com", "https://*.hcaptcha.com"],
    },
    captcha: {
      apiKey: "8f2461bb-ff9d-461b-987d-c15b5bc73269",
    },
    // Email notifier account (sender)
    emailer: {
      host: "mail.dubai-latam.club", // Sender email smtp
      port: "465", // Sender email port
      user: "internal@dubai-latam.club", // Sender email username
      pass: "O?%ia6v6Gfwz", // Sender email password

      // Your email to receive notification (receiver)
      from: '"Contact Me" <noreply@example.com>', // Sender email address
      to: "email@example.com", // Your email address
      subject: "Contact Us", // Subject
    },
  },
};
