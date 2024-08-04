CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"priority" varchar,
	"description" text,
	"date" date,
	"completed" boolean
);
