from flask_restful import Resource
import src.utils.db_util as db_util


class PostResource(Resource):
    def __init__(self):
        super().__init__()
        self.__db = db_util.get_db()

    def get(self, account=None, directory=None):

