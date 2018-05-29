#!flask/bin/python3
import os
from flask import Flask

app = Flask(__name__, template_folder="static/dist",static_folder="static/dist", instance_relative_config=True)
#app.config.from_object('config.Config')

from .database.db import init_app 
init_app(app)

from app import routes
 
if __name__ == "__main__":
    app.run()
