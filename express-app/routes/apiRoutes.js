module.exports = (router, db) => {
  router.get("/quotes", async (req, res) => {
    try {
      const quotes = await db.getAllQuotes();
      console.log("sth", quotes);
      res.send(quotes);
    } catch (err) {
      res.status(500).send({ error: `${err.message}` });
    }
  });

  router.get("/quotedata", async (req, res) => {
    try {
      const passengerData = await db.getQuoteData();
      const citiesData = await db.getAllCities();
      console.log("quoteData", passengerData);
      console.log("CityData", citiesData);
      res.send({ passengerData, citiesData });
    } catch (err) {
      res.status(500).send({ error: `${err.message}` });
    }
  });

  return router;
};
