const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Backend funcionando en puerto " + PORT));