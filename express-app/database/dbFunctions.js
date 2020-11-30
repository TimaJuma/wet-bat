const { db } = require("./dbSetup");

// API queries

// #1
const addQuote = async (quote) => {
  quote.price = quote.price * 100;
  try {
    const queryString = `
    INSERT INTO passengers(first_name, last_name, email, phone)
    VALUES ($1, $2, $3, $4)
    RETURNING *; `;
    const res = await db.query(queryString, [
      quote.first_name,
      quote.last_name,
      quote.email,
      quote.phone,
    ]);
    const passenger_id = res.rows[0].id;

    const queryString2 = `
    INSERT INTO quotations(origin, destination, depart_date, return_date, passenger_id, transport_id, price, currency_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *; `;
    const res2 = await db.query(queryString2, [
      quote.origin,
      quote.destination,
      quote.depart_date,
      quote.return_date,
      passenger_id,
      quote.transport_id,
      quote.price,
      1,
    ]);

    return { ...res.rows[0], ...res2.rows[0] };
  } catch (err) {
    console.error("query error", err.stack);
  }
};
exports.addQuote = addQuote;

// # 2
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

// #3
const getTransportData = async () => {
  try {
    let queryString = `
    SELECT * FROM transportations;
    `;
    const res = await db.query(queryString);
    return res.rows;
  } catch (err) {
    console.error("query error", err.stack);
  }
};
exports.getTransportData = getTransportData;

// #4
const getCitiesData = async () => {
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
exports.getCitiesData = getCitiesData;

// #4
const getCurrencyData = async () => {
  try {
    let queryString = `
    SELECT * FROM currency;
    `;
    const res = await db.query(queryString);
    return res.rows;
  } catch (err) {
    console.error("query error", err.stack);
  }
};
exports.getCurrencyData = getCurrencyData;

// const addQuote = async (quote) => {
//   const quoteKeys = [];
//   const quotePlaceholders = [];
//   const quoteValues = [];

//   for (key in quote) {
//     if (key === "price") {
//       quote[key] = Number(quote[key]) * 100;
//     }
//     quoteKeys.push(key);
//     quotePlaceholders.push(`$${quoteKeys.length}`);
//     quoteValues.push(quote[key]);
//   }

//   try {
//     let queryString = `
//     INSERT INTO quotations(${quoteKeys.join(", ")})
//     VALUES (${quotePlaceholders});
//     `;
//     const res = await db.query(queryString, quoteValues);
//     return res.rows;
//     console.log("res.rows", res.rows);
//   } catch (err) {
//     console.error("query error", err.stack);
//   }
// };
// exports.addQuote = addQuote;
