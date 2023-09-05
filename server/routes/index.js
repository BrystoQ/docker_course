const express = require("express");
const serverResponses = require("../utils/helpers/responses");
const messages = require("../config/messages");
const { MessageText } = require("../models/messageText/messageText");

const routes = (app) => {
  const router = express.Router();

  router.post("/messageText", (req, res) => {
    const messageText = new MessageText({
      text: req.body.text,
    });

    messageText
      .save()
      .then((result) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, result);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  router.get("/messageText", (req, res) => {
    MessageText.find({}, { __v: 0 })
      .then((messageTexts) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, messageTexts);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  app.use("/api", router);
};
module.exports = routes;
