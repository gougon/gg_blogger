from flask import g

from src.database import Database
import config.constant as const


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = Database(const.DB_PATH)
        db.open()
    return db


def trans_posts(posts):
    trans_list = []
    for post in posts:
        post = {col_name: col for (col_name, col) in zip(const.POST_COLUMN_NAME, post)}
        trans_list.append(post)
    return trans_list
