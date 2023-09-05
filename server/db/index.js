require("dotenv").config();
const mongoose = require("mongoose");

exports.connect = (app) => {
  const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
  };

  const connectWithRetry = () => {
    mongoose.Promise = global.Promise;
    console.log("MongoDB connection with retry");
    mongoose
      .connect(
        (process.env.NODE = "development"
          ? process.env.MONGODB_URI_DEV
          : process.env.MONGODB_URI),
        options
      )
      .then(() => {
        console.log("MongoDB is connected");
        app.emit("ready");
      })
      .catch((err) => {
        console.log(
          "MongoDB connection unsuccessful, retry after 2 seconds.",
          err
        );
        setTimeout(connectWithRetry, 2000);
      });
  };
  connectWithRetry();
};
