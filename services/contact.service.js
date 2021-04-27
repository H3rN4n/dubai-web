const axios = require("axios");

export function sendContactForm(values) {
  return axios.post("/api/contact", values);
}

export function emailExist(email) {
  return axios.post("/api/contact-email-exist", { email });
}

export function discordUserExist(discordUser) {
  return axios.post("/api/contact-discord-user-exist", { discordUser });
}
