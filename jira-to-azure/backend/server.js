require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fieldRoutes = require("./routes/fields");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/fields", fieldRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
