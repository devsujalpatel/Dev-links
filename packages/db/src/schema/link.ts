import {
  pgTable,
  text,
  timestamp,
  integer,
  varchar,
} from "drizzle-orm/pg-core";

import { user } from "./auth";

export const links = pgTable("links", {
  id: text("id").primaryKey(),
  userId: text("id").references(() => user.id),
  title: text("title").notNull(),
  url: text("url").notNull(),
  slug: varchar("slug", { length: 100 }).unique().notNull(),
  clicks: integer("clicks").default(0),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").notNull(),
});
