import express from "express";
import db from "../db.js";

const router = express.Router();

// Fetch all SkyPods
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM skypods");
    res.json(result.rows);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ error: err.message });
  }
});

// Create a new SkyPod
router.post("/", async (req, res) => {
  const { name, description, ownerId } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO skypods (name, description, owner_id) VALUES ($1, $2, $3) RETURNING *",
      [name, description, ownerId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ error: err.message });
  }
});

export default router;
