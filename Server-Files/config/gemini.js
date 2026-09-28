const Groq = require("groq-sdk");

const apiKey = process.env.GROQ_API_KEY?.trim();
const groq = apiKey ? new Groq({ apiKey }) : null;

module.exports = { groq, hasGroqKey: Boolean(apiKey) };