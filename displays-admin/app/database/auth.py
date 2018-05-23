from .db import getUser, createUser
#from flask import session
#from flask.ext.session import Session
from werkzeug.security import generate_password_hash, check_password_hash

def registerAuth(username,password):
    error = None
    if not username:
    	error = 'Username is required.'
    elif not password:
    	error = 'Password is required.'
    elif getUser(username) is None:
    	error = 'User {0} is already registered.'.format(username)
    if error is None:
        createUser(username,generate_password_hash(password))
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
		#session.clear()
		#session['user'] = user['client_id']
		return {"success" : True}
	return { "success" : False, "message" : error }