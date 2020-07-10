import express, { Application } from "express";

const app: Application = express();

app.get("/getName", (req, res) => {
  res.status(200).send({
    result: {
      name: "test",
    },
  });
});

app.listen(8080, () => console.log("Running"));
