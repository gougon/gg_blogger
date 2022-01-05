from flask_restful import Resource
import src.utils.db_util as db_util


class PostListResource(Resource):
    def __init__(self):
        super().__init__()
        self.__db = db_util.get_db()

    def get(self):
        posts = self.__db.execute_sql_cmd('SELECT *\n\
                                           FROM post;')
        posts = db_util.trans_posts(posts)
        return {'posts': posts}
