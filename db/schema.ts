import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const waitlist = pgTable("waitlist", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  fullName: text("full_name").notNull(),
  email: text("email").unique().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWaitlistSchema = createInsertSchema(waitlist);
export const selectWaitlistSchema = createSelectSchema(waitlist);
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = z.infer<typeof selectWaitlistSchema>;
