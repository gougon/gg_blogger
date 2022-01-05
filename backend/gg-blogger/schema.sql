CREATE TABLE IF NOT EXISTS  user(
    account     VARCHAR(20) PRIMARY KEY,
    password    VARCHAR(20) NOT NULL,
    role        VARCHAR(5)  DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS  directory(
    did     INTEGER     PRIMARY KEY AUTOINCREMENT,
    name    VARCHAR(50) NOT NULL,
    account VARCHAR(20) NOT NULL,
    FOREIGN KEY (account)   REFERENCES  user(account)
);

CREATE TABLE IF NOT EXISTS  post(
    pid         INTEGER     PRIMARY KEY AUTOINCREMENT,
    title       TEXT        NOT NULL,
    content     TEXT,
    word_count  INTEGER NOT NULL,
    did         INTEGER,
    account     VARCHAR(20) NOT NULL,
    FOREIGN KEY (did)       REFERENCES  directory(did),
    FOREIGN KEY (account)   REFERENCES  user(account)
);

CREATE TABLE IF NOT EXISTS  tag(
    tid     INTEGER     PRIMARY KEY AUTOINCREMENT,
    name    VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS  comment(
    cid     INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS  tag_in_post(
    pid INTEGER,
    tid INTEGER,
    PRIMARY KEY (pid, tid),
    FOREIGN KEY (pid)   REFERENCES  tag(tid),
    FOREIGN KEY (tid)   REFERENCES  tag(tid)
);

CREATE TABLE IF NOT EXISTS  manage_comment(
    pid     INTEGER,
    cid     INTEGER,
    account VARCHAR(20) NOT NULL,
    PRIMARY KEY (pid, cid),
    FOREIGN KEY (pid)       REFERENCES  post(pid),
    FOREIGN KEY (cid)       REFERENCES  comment(cid),
    FOREIGN KEY (account)   REFERENCES  user(account)
);
