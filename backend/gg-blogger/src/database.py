import os
import sqlite3

import config.constant as const


class Database():
    def __init__(self, db_path):
        self.__conn = None
        self.__path = db_path

    def open(self):
        self.__conn = sqlite3.connect(const.DB_PATH)

    def close(self):
        self.__check_conn()
        self.__conn.close()

    def init_db(self, f):
        self.__check_conn()
        self.__conn.cursor().executescript(f.read())
        self.__conn.commit()

    def __check_conn(self):
        if self.__conn is None:
            raise Exception('Connecting DB failed.')
