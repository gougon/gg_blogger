INSERT INTO user(account, password, role)
VALUES ('admin1', 'pwd1', 'admin');

INSERT INTO user(account, password, role)
VALUES ('user1', 'pwd1', 'user');

INSERT INTO user(account, password, role)
VALUES ('user2', 'pwd2', 'user');

INSERT INTO post(title, content, word_count, account)
VALUES ('title1', '你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你',
        148, 'user1');

INSERT INTO post(title, content, word_count, account)
VALUES ('title2', '內容123456789', 11, 'user1');

INSERT INTO post(title, content, word_count, account)
VALUES ('title3', '內容234567891', 11, 'user2');

INSERT INTO post(title, content, word_count, account)
VALUES ('title4', '內容345678912', 11, 'user2');

INSERT INTO post(title, content, word_count, account)
VALUES ('title5', '內容456789123', 11, 'user1');
