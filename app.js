const express = require("express");
const cors = require("cors");
const app = express();
const contactsRouters = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouters);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
