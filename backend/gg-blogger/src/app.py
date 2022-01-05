from flask import Flask
from flask import g
from flask_restful import Api
from flask_cors import CORS

import utils.db_util as db_util
import config.constant as const
import config.config as cfg
from resources.post_list_resource import PostListResource


app = Flask(__name__)
app.config.from_object(cfg)
api = Api(app)
CORS(app, origin='*')


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


def init_db():
    with app.app_context():
        db = db_util.get_db()
        with open(const.SCHEMA_PATH, mode='r', encoding='utf-8') as f:
            db.execute_sql_file(f)


api.add_resource(PostListResource, '/post', endpoint='posts')


if __name__ == '__main__':
    init_db()
    app.run()
