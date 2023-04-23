const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRouter = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRouter);
app.use(shopRoutes);

app.listen(3000);
