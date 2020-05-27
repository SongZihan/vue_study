from flask import request, jsonify
from flask_login import login_user, UserMixin, LoginManager, login_required

from flask import Flask, render_template,session
from flask_debugtoolbar import DebugToolbarExtension
import os
from flask_cors import CORS
import json




# FRONTEND_FOLDER = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'vue_app/vue-begin/app')
# static_folder='vue_app/vue-begin/app/static',template_folder='vue_app/vue-begin/app/templates'
app = Flask(__name__)
app.config.from_pyfile("config/base_config.py")
# 开启调试板
toolbar = DebugToolbarExtension(app)
# CORS(app)
login_manager = LoginManager()
login_manager.init_app(app)


class User(UserMixin):
    __tablename__ = 'user'

    id = '12344'
    pwd = '123'
    def set_attr(self,id,pwd):
        self.id = id
        self.pwd = pwd

    def get(self,uid):
        return {"id":int(self.id),"pwd":self.pwd}



# 获取用户login_name作为cookie加密
@login_manager.user_loader
def load_user(uid):
    user = User()
    user.id=uid
    return user







@app.route('/')
def hello_world():
    return render_template("index.html")

# 连接api
@app.route('/check_login',methods=["GET", "POST"])
def check_login():
    if request.method == "POST":
        print("i get a post request! content is :")
        print(request.data)
        p = json.loads(request.data)
        user = User()
        user.id=p["user_name"]
        user.pwd=p["passwd"]

        login_user(user)
        print(session)
        return "i get your login request"

@app.route('/login_data',methods=["GET","POST"])
@login_required
def push_login_data():
    # 登录成功后传输登录数据
    return 'you are success login~this is my data~'




if __name__ == '__main__':
    app.run(host='localhost')

