from flask import Flask, render_template
from backend.extensions import mongo
from backend.api.news import news
app = Flask(__name__, static_folder='frontend/build/static',template_folder='frontend/build')
app.bug=True
app.config.from_object('settings')
mongo.init_app(app)

@app.route('/')
def root():
    return render_template('index.html')

app.register_blueprint(news)

print('Iniciando servidor....')
app.run(host='0.0.0.0')
