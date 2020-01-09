const express = require("express");
const app = express(); // instantiating the express

app.get("/", (req, res) => {
  return res.send("Peris doesnt want to learn programming");
});
app.listen(4000, () => {
  console.log("your app is listening at port 4000");
});
