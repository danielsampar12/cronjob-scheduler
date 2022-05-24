const { default: axios } = require("axios");
const cron = require("node-cron");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  console.log(`Salve rapeiz`);

  // cron.schedule("* * * * * *", () => {
  //   console.log("⏰ Task a cada 1 segundo");
  //   // axios.post('http://localhost:1337/cronjob/every-second')
  //   //   .then(({data}) => console.log({ data }))
  //   //   .catch(err => console.log({ err: err.message }))
  // });

  cron.schedule("0 * * * *", () => {
    console.log("Task a cada hora");
  });

  cron.schedule("*/5 * * * *", () => {
    console.log("⏰ Task a cada cinco minutos");

    axios
      .post("http://localhost:1337/cronjob/every-five-minutes")
      .then(({ data }) => console.log({ data }))
      .catch((err) => console.log({ err: err.message }));
  });
});
