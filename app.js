require ("dotenv").config();
const express = require("express");
const router = require("./routes/lapNow.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to BambooG")
});

app.use("/api", router);

// app.use((req, res, next) => {
//     const error = new Error("Not Found" + "😢😢😢😢😢😢😢");
//     error.status = 404;
//     next(error);
// });

// app.use((error, req, res, next) => {
//     res.json({
//       error: {
//         message: error.message + "🔥🔥🔥🔥🔥🔥🔥🔥🔥",
//       },
//     });
//   });
  
  module.exports = app;