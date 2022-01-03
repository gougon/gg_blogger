from flask import Flask
from flask import g
from flask_restful import Api
from flask_cors import CORS

from src.database import Database
import config.constant as const
import config.config as cfg


app = Flask(__name__)
app.config.from_object(cfg)
api = Api(app)
CORS(app, origin='*')


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = Database(const.DB_PATH)
        db.open()
    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource(const.SCHEMA_PATH, mode='r') as f:
            db.init_db(f)


@app.cli.command()
def initdb():
    init_db()


if __name__ == '__main__':
    init_db()
    app.run()
