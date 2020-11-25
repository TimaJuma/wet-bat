module.exports = (router, db) => {
  router.get("/test", async (req, res) => {
    const sth = await db.getAllQuotes();
    console.log("sth", sth);
    res.send(sth);
  });

  return router;
};
