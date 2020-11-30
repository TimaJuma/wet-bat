const { registerConfirm } = require("../middlewares/sendEmail");

const { validate, validateFormData } = require("../middlewares/formValidation");

module.exports = (router, db) => {
  router.get(
    "/quotes",
    validate,
    validateFormData("create"),
    async (req, res) => {
      try {
        const quotes = await db.getAllQuotes();
        res.send(quotes);
      } catch (err) {
        res.status(500).send({ error: `${err.message}` });
      }
    }
  );

  router.get("/quotedata", async (req, res) => {
    try {
      const transportsData = await db.getTransportData();
      const citiesData = await db.getCitiesData();
      const currencyData = await db.getCurrencyData();
      res.send({ transportsData, citiesData, currencyData });
    } catch (err) {
      res.status(500).send({ error: `${err.message}` });
    }
  });

  router.post("/quote", async (req, res) => {
    try {
      console.log("res.body", req.body);
      const result = await db.addQuote(req.body);
      registerConfirm(req, res);
      res.send("OK");
    } catch (err) {
      res.status(500).send({ error: `${err.message}` });
    }
  });

  router.put("/quote/:id", async (req, res) => {
    try {
      console.log("res.id", req.params.id, req.body);
      const result = await db.updateQuote(req.body);
      res.send("OK");
    } catch (err) {
      res.status(500).send({ error: `${err.message}` });
    }
  });

  return router;
};
