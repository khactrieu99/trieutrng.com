CREATE TABLE "articles" (
  "id" bigserial PRIMARY KEY,
  "title" varchar NOT NULL,
  "content" varchar NOT NULL,
  "slug" varchar UNIQUE NOT NULL,
  "description" varchar NOT NULL,
  "banner" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "tags" (
  "id" bigserial PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL
);

CREATE TABLE "articles_tags" (
  "article_id" bigint,
  "tag_id" bigint,
  PRIMARY KEY ("article_id", "tag_id")
);

CREATE INDEX ON "articles" ("slug");

CREATE INDEX ON "tags" ("name");

ALTER TABLE "articles_tags" ADD FOREIGN KEY ("article_id") REFERENCES "articles" ("id");

ALTER TABLE "articles_tags" ADD FOREIGN KEY ("tag_id") REFERENCES "tags" ("id");
