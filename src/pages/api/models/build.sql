BEGIN;
DROP TABLE IF EXISTS users, articles, comments, user_coding, reading_list, likes, tags, article_tags CASCADE;

DROP TYPE IF EXISTS statuses;
CREATE TYPE statuses AS ENUM ('published', 'draft');

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50),
	name VARCHAR(255),
	bio VARCHAR(200),
	email VARCHAR(50) NOT NULL UNIQUE,
	display_email BOOLEAN DEFAULT true,
	profile_image TEXT,
	location VARCHAR(100),
	github_account TEXT,
	website_url VARCHAR(100),
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articles (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	slug TEXT NOT NULL,
	temp_slug TEXT NOT NULL,
	content TEXT NOT NULL,
	cover_image TEXT,
	status statuses DEFAULT 'draft',
	tags VARCHAR(255) NOT NULL,
	last_reading TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE draft_articles (
-- 	id SERIAL PRIMARY KEY,
-- 	title TEXT NOT NULL,
-- 	slug TEXT NOT NULL,
-- 	content TEXT NOT NULL,
-- 	cover_image TEXT,
-- 	tags VARCHAR(255) NOT NULL,
-- 	last_reading TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
-- 	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
-- 	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
-- 	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	contents VARCHAR(240) NOT NULL,
	user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	article_id INTEGER REFERENCES articles(id) ON DELETE CASCADE,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CHECK(
    COALESCE((article_id)::BOOLEAN::INTEGER,0)
    +
    COALESCE((user_id)::BOOLEAN::INTEGER,0)
    = 1
	)
);

CREATE TABLE user_coding (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	currently_learning VARCHAR(200),
	skills_languages VARCHAR(200),
	currently_hacking_on VARCHAR(200),
	available_for TEXT,
	work VARCHAR(100),
	education VARCHAR(100),
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reading_list (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
	archive BOOLEAN DEFAULT false,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	UNIQUE(user_id, article_id)
);

CREATE TABLE likes (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	article_id INTEGER REFERENCES articles(id) ON DELETE CASCADE,
	comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
	CHECK(
		COALESCE((article_id)::BOOLEAN::INTEGER,0)
		+
		COALESCE((comment_id)::BOOLEAN::INTEGER,0)
		= 1
	),
	UNIQUE(article_id, user_id, comment_id)
);

CREATE TABLE tags (
	id SERIAL PRIMARY KEY,
	title VARCHAR(20) NOT NULL UNIQUE,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE article_tags (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	tags_id INTEGER NOT NULL REFERENCES tags(id),
	article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
	UNIQUE(article_id, tags_id)
);

COMMIT;
