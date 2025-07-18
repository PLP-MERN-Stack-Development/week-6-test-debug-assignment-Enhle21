const express = require("express");
const router = express.Router();
const Bug = require("../models/Bug");

router.post("/", async (req, res, next) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) { next(err); }
});

router.get("/", async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) { next(err); }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBug);
  } catch (err) { next(err); }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) { next(err); }
});

module.exports = router;