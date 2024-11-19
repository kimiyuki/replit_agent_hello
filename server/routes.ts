import type { Express } from "express";
import { db } from "../db";
import { waitlist } from "../db/schema";
import { insertWaitlistSchema } from "../db/schema";

export function registerRoutes(app: Express) {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      await db.insert(waitlist).values(data);
      res.status(201).json({ message: "Successfully joined waitlist" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
}
