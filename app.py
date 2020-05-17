from flask import Flask, render_template
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config.from_pyfile("config/base_config.py")
# 开启调试板
toolbar = DebugToolbarExtension(app)


@app.route('/')
def hello_world():
    return render_template("index.html")


if __name__ == '__main__':
    app.run()

