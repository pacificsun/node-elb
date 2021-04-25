const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.status(200).send("it is working normally");
});

app.listen(PORT, () => console.log(` server is running on PORT ${PORT}`));
