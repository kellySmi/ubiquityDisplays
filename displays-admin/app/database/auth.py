from .db import getUser, createUser, getAllUsers
#from flask_jwt import JWT, jwt_required, current_identity
import bcrypt
from flask_jwt_login import JWT, process_login, login_required
from werkzeug.security import generate_password_hash, check_password_hash, safe_str_cmp




# def authenticate(username, password):
# 	users = getAllUsers()
# 	username_table = {u.username: u for u in users}
# 	user = username_table.get(username, None)
# 	if user and safe_str_cmp(user.password.encode('utf-8'), password.encode('utf-8')):
# 		return user

# def identity(payload):
# 	users = getAllUsers()
# 	userid_table = {u.id: u for u in users}
# 	user_id = payload['identity']
# 	return userid_table.get(user_id, None)


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
	#hashed = bcrypt.hashpw(password, bcrypt.gensalt(10))



	if user is None:
		error = 'Incorrect username.'
	elif not check_password_hash(user['password'], password):
	#elif bcrypt.hashpw(password, hashed) != hashed:
		error = 'Incorrect password.'

	if error is None:
		return {"success" : True, "user" : user}
	return { "success" : False, "message" : error }