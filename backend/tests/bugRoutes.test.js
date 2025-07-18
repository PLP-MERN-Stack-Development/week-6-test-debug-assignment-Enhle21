const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const bugRoutes = require("../routes/bugRoutes");

const app = express();
app.use(express.json());
app.use("/api/bugs", bugRoutes);

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/bugtracker_test");
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Bug Routes", () => {
  it("should create a new bug", async () => {
    const res = await request(app).post("/api/bugs").send({ title: "Sample", description: "Bug desc" });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
  });
});