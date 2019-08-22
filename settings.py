import os
from dotenv import load_dotenv

load_dotenv(verbose=True)
MONGO_URI = os.environ.get('MONGO_URI')
ENV = os.environ.get('ENV')
