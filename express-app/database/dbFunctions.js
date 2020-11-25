const { db } = require("./dbSetup");

// API queries
const test = () => {
  const quotes = [1, 2, 3, 4];
  return quotes;
};
exports.test = test;

const getAllQuotes = async () => {
  try {
    const res = await db.query(`SELECT * FROM passengers`);
    console.log("res", res.rows);
    return res.rows;
  } catch (err) {
    console.error("query error", err.stack);
  }
};
exports.getAllQuotes = getAllQuotes;
