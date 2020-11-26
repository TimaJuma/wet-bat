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

  return router;
};
