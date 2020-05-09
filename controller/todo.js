const express = require("express");
const router = express.Router();
const ToDo = require("../models/todo.js");

// Index
router.get("/", (req, res) => {
ToDo.count({}, (err, task) => {
    ToDo.find({}, (err, todo) => {
    res.render("Index", {
        task: task,
        todo: todo,
    });
});
});
});

//new
router.post("/new", (req, res) => {
ToDo.create(req.body, (err, task) => {
    res.redirect("/todo");
});
});

//delete

router.delete("/:id", (req, res) => {
ToDo.findByIdAndRemove(req.params.id, () => {
    res.redirect("/todo");
});
});

module.exports = router;
