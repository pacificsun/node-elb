const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get('\', ()=> ("app is running "))

app.listen(PORT, () => console.log(` server is running on PORT ${PORT}`));
