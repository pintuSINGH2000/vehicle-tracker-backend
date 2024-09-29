const express = require("express");
const { getTrackController } = require("../controllers/track");
const router = express.Router();

router.get("/:trackNo", getTrackController);

module.exports = router;
