const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Task Manager API");
});

app.use("/api/v1/tasks", tasks);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
