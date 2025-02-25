const GiftExchange = require("../models/gift-exchange");

const express = require("express");
const { BadRequestError } = require("../utils/errors");
const router = express.Router();

router.post("/pairs", async (req, res, next) => {
  try {
    const newGift = req.body.names;
    if (!newGift || newGift.length < 2) {
      return next(new BadRequestError("Invalid input"));
    }
    const gift = await GiftExchange.pairs(newGift);
    res.status(200).json(gift);
  } catch (err) {
    next(err);
  }
});

router.post("/traditional", async (req, res, next) => {
  try {
    const newGift = req.body.names;

    if (!newGift || newGift.length < 2) {
      return next(new BadRequestError("Invalid input"));
    }

    const gift = await GiftExchange.traditional(newGift);
    res.status(200).json(gift);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
