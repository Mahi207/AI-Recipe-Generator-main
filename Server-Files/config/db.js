const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

  if (!uri) {
    console.warn("MongoDB URI not provided. Continuing without a database connection.");
    return null;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected:${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Connection Error:${error.message}`);
    return null;
  }
};

module.exports = connectDB;