from .db import getUser, createUser, getAllUsers
#from flask_jwt import JWT, jwt_required, current_identity
#import bcrypt
from flask_jwt_login import JWT, process_login, login_required
from werkzeug.security import generate_password_hash, check_password_hash, safe_str_cmp

def registerAuth(username,password):
    error = None
    #hashed = bcrypt.hashpw(password, bcrypt.gensalt(10))
    if not username:
    	error = 'Username is required.'
    elif not password:
    	error = 'Password is required.'
    elif getUser(username) is not None:
    	error = 'User {0} is already registered.'.format(username)
    if error is None:
        createUser(username,generate_password_hash(password))
        #createUser(username,bcrypt.hashpw(password, bcrypt.gensalt(10)))
        return {"success" : True}
    return { "success" : False, "message" : error }

def authLogin(username,password):
    error = None
    user = getUser(username)
    if user is None:
        error = 'Incorrect username.'
    elif not check_password_hash(user['password'], password):
        error = 'Incorrect password.'
    if error is None:
        return True
    return False
