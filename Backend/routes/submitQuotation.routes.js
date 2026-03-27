const express = require("express");
const submitRouter = express.Router();

const upload = require("../middlewares/upload.middleware");
const submitQuotationController = require("../Controllers/submitQuotation.controller");

submitRouter.post(
  "/submit-quotation",
  upload.single("file"),
  submitQuotationController 
);

module.exports = submitRouter;
