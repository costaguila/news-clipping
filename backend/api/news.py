from flask import Blueprint
from flask import Response
from backend.extensions import mongo
from bson.json_util import dumps, CANONICAL_JSON_OPTIONS

news = Blueprint('news',__name__)

@news.route('/api/news',methods=['GET'])
def get_news():
    data = []
    news_collection = mongo.db.noticias

    spiders = news_collection.distinct('spider')
    for spider in spiders:
        data += list( news_collection.find({'spider': spider}).limit(5) )
    data = dumps(data, json_options=CANONICAL_JSON_OPTIONS)

    return Response(data,mimetype='application/json')
