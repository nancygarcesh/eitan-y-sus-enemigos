const express = require("express");
const { transformAndCreateFields } = require("../controllers/fieldsController");
const router = express.Router();

router.post("/upload", transformAndCreateFields);

module.exports = router;
