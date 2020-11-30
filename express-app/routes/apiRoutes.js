module.exports = (router, db) => {
  router.get("/quotes", async (req, res) => {
    try {
      const quotes = await db.getAllQuotes();
      // console.log("sth", quotes);
      res.send(quotes);
    } catch (err) {
      res.status(500).send({ error: `${err.message}` });
    }
  });

  router.get("/quotedata", async (req, res) => {
    try {
      const transportsData = await db.getTransportData();
      const citiesData = await db.getCitiesData();
      const currencyData = await db.getCurrencyData();
      console.log("quoteData", transportsData, currencyData);
      // console.log("CityData", citiesData);
      res.send({ transportsData, citiesData, currencyData });
    } catch (err) {
      res.status(500).send({ error: `${err.message}` });
    }
  });

  router.post("/quote", async (req, res) => {
    try {
      console.log("res.body", req.body);
      const result = await db.addQuote(req.body);
      // console.log("result", result);
      res.send("OK");
    } catch (err) {
      res.status(500).send({ error: `${err.message}` });
    }
  });

  return router;
};
