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

  router.get("/", (req, res) => {
    Todo.find({}, { __v: 0 })
      .then((todos) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, todos);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  app.use("/api", router);
};
module.exports = routes;
