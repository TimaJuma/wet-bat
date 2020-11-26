const { db } = require("./dbSetup");

// API queries
const test = () => {
  const quotes = [1, 2, 3, 4];
  return quotes;
};
exports.test = test;

const getAllQuotes = async () => {
  try {
    let queryString = `
    SELECT quotations.id,
      origins.id AS origin_id, origins.code AS origin_code, origins.city AS origin_city,
      destinations.id AS dest_id, destinations.code AS dest_code, destinations.city AS dest_city,
      depart_date, return_date, passengers.*, price, is_order
    FROM quotations
    JOIN passengers ON passenger_id = passengers.id
    LEFT JOIN cities AS destinations ON destinations.id = destination
    LEFT JOIN cities AS origins ON origins.id = origin;
    `;
    const res = await db.query(queryString);
    console.log("res", res.rows);
    return res.rows;
  } catch (err) {
    console.error("query error", err.stack);
  }
};
exports.getAllQuotes = getAllQuotes;

const getQuoteData = async () => {
  try {
    let queryString = `
    SELECT * FROM passengers;
    `;
    const res = await db.query(queryString);
    return res.rows;
  } catch (err) {
    console.error("query error", err.stack);
  }
};
exports.getQuoteData = getQuoteData;

const getAllCities = async () => {
  try {
    let queryString = `
    SELECT * FROM cities;
    `;
    const res = await db.query(queryString);
    return res.rows;
  } catch (err) {
    console.error("query error", err.stack);
  }
};
exports.getAllCities = getAllCities;
