CREATE TABLE IF NOT EXISTS notes (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    important BOOLEAN,
    date TIME
);

INSERT INTO notes (content, important) VALUES
('This is the first important note, created via init.sql!', TRUE),
('This is a second note, also from init.sql.', FALSE);