const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const adminRouter = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRouter);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
