from flask_login import UserMixin

from app import login_manager


class User(UserMixin):
    __tablename__ = 'user'

    id = ''
    pwd = ''
    def set_attr(self,id,pwd):
        self.id = id
        self.pwd = pwd

    def get(self,uid):
        return {"id":int(self.id),"pwd":self.pwd}



# 获取用户login_name作为cookie加密
@login_manager.user_loader
def load_user(uid):
    return User.get(int(uid))
