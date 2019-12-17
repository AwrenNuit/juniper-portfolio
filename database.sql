CREATE TABLE art(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(150) NOT NULL,
	"medium" VARCHAR(100),
	"year" DATE,
	"photo" VARCHAR(255) NOT NULL
);

INSERT INTO art("name", "medium", "year", "photo")
VALUES('Project 1', 'Charcoal', '2019-01-01', 'https://image.shutterstock.com/image-photo/black-compressed-charcoal-sticks-drawing-260nw-379250254.jpg');
INSERT INTO art("name", "medium", "year", "photo")
VALUES('Project 2', 'Acrylic', '2015-01-01', 'https://previews.123rf.com/images/123stockbie/123stockbie1703/123stockbie170300752/79372894-abstract-art-background-digital-oil-painting-texture-fragment-of-artwork-.jpg');