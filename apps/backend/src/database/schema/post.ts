import { int, mysqlEnum, mysqlTable, uniqueIndex, varchar, serial, text, mysqlSchema, datetime, boolean } from 'drizzle-orm/mysql-core';

export const posts = mysqlTable("posts", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("title", {length: 255}),
  description: text("description"),
  pubDate: datetime("pubDate"),
  published: boolean("published")
});