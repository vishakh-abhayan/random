const express = require("express");
const app = express();
const port = 8000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.get("/dinoname", async (req, res) => {
//   res.send("hello");
//   fetch("https://dinoipsum.com/api/?format=json&words=10&paragraphs=3")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error("Where did all the dinosaurs go?"));
// });
