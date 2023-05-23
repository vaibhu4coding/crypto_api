const app = require("./app");
const dotenv = require("dotenv");
const connectDb = require("./database-connection/db");
dotenv.config({path: "./config/config.env"});
connectDb();
const port = process.env.PORT;
app.listen(port, () => {
  console.log("App is running...");
});
