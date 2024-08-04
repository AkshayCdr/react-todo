import {
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  date,
  boolean,
  text,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  priority: varchar("priority"),
  description: text("description"),
  date: date("date"),
  completed: boolean("completed"),
});
