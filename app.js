const express = require("express");
// console.log(express);

const users = require("./data.json");
// console.log(users);



const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send({ users });
});


app.post("/", (req, res) => {
    // console.log(req.body);
    const newUsers = [...users, req.body]
    // res.send("Post");
    res.send(newUsers);
});


app.get("/:ID", (req, res) => {
    const newUsers = users.filter((user) => user.ID === req.params.ID);
    res.send(newUsers);
});


app.patch("/:id", (req, res) => {
    res.send("Patch");
});


app.delete("/:ID", (req, res) => {
    const newUsers = users.filter((user) => user.ID !== req.params.ID);
    res.send(newUsers);
});


app.listen(2346, function () {
    console.log("Listening on port 2346");
});