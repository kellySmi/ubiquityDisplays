from app import app 
from flask import render_template, request, jsonify, abort, redirect, session, make_response,url_for
from flask_session import Session
#from flask_httpauth import HTTPBasicAuth
from .database.db import getUser, getAll_displays, getAll_sequences, getAll_clients, createDisplay, createClient, createSequence
from werkzeug.security import generate_password_hash, check_password_hash
from .database.auth import registerAuth, authLogin
#from flask_jwt import JWT, jwt_required, current_identity
from flask_jwt_login import JWT, process_login, login_required
from .models.user import User
from flask_jsglue import JSGlue

#app.config.from_object('config.Config')
app.config.from_object(__name__)
Session(app)
jsglue = JSGlue(app)
TOKEN_NAME='token'
app.config["SECRET_KEY"] = "super secret"
app.config["JWT_COOKIE_NAME"] = TOKEN_NAME
jwt = JWT(app)

class User():
	def __init__(self, id, pw, name):
		self.id = id
		self.password = pw
		self.username = name

	def __repr__(self):
		return "User(id=%s, password=%s, name=%s)" % (self.id, self.pw, self.name)

@jwt.authentication_handler
def auth_handler(username, password):
	users = getUser(username)
	#print(users)
	#if username in users:#if check_password_hash(users['username'], password):
	return User(users['id'], users['password'], users['username'])
	#return None


@jwt.unauthorized_handler
def unauthorized_handler():
	return render_template('login.html')



# @app.route('/auth/client/login', methods=['POST'])
# def clientLogin():
# 	#if request.method is 'POST':
# 	token = process_login(request.form["username"], request.form["password"])
# 	response = make_response(url_for("display-demo"))
# 	response.set_cookie(TOKEN_NAME, token)
# 	redirect("api/client-display", code=307)
# 	return response
   
# 	#session.clear()
# 	#session['user'] = auth['user']['id']
	
# 	#return jsonify(auth)
# 	#return accessToken

# @app.route('/auth/client/register', methods=['POST'])
# def clienRegister():
# 	username = request.form['username']
# 	passwd = request.form['password']
# 	#data = request.get_json()
# 	response = registerAuth(username,passwd)
# 	if response['success']:
# 		redirect("/login_success", code=307)
# 	return jsonify(response)

# @app.route("/display-demo")
# def demo():
# 	image_ar = ['display1.jpg','display2.jpg','display3.jpg']
# 	intval = 10000 # 10 secs
# 	return render_template('demo/index.html', image_ar=image_ar, intval=intval)

# @app.route('/api/client-display',methods=['GET','POST'])
# @login_required
# def clientDisplay():
# 	return jsonify({"display":"1"})

@app.route('/auth/admin/register', methods=['POST'])
def adminRegister():
	username = request.form['username']
	passwd = request.form['password']
	#data = request.get_json()
	response = registerAuth(username,passwd)
	if response['success']:
		#redirect("login_success", code=307)
		token = process_login(request.form["username"], request.form["password"])
		resp = make_response(redirect("/displays", code=307))
		resp.set_cookie(TOKEN_NAME, token)
		return resp
	return jsonify(response)

@app.route('/auth/admin/login', methods=['POST'])
def adminLogin():
	token = process_login(request.form["username"], request.form["password"])
	response = make_response(redirect("/displays", code=307))
	response.set_cookie(TOKEN_NAME, token)
	#redirect("displays", code=307)
	return response

@app.route('/displays', methods=['GET','POST'])
def adminDisplays():
	return render_template('index.html')

@app.route('/api/<type>',methods=['GET'])
def getAll(type):
	if type == 'displays':
		data = getAll_displays()
	elif type == 'clients': 
		data = getAll_clients()
	elif type == 'sequences': 
		data = getAll_sequences()
	return jsonify(data)

@app.route('/api/<type>',methods=['POST'])
def createRec(type):
	data = request.get_json(True,False)
	#print(data)
	if type == 'display':
		createDisplay(data)
	elif type == 'client':
		createClient(data)
	elif type == 'sequence':
		createSequence(data)
	return jsonify({"success":"true"})

@app.route('/api/<type>',methods=['PUT'])
def updateRec(type):
	data = request.get_json(True,False)
	if type == 'display':
		updateDisplay(data)
	elif type == 'client':
		updateClient(data)
	elif type == 'sequence':
		updateSequence(data)

@app.route('/api/<type>',methods=['DELETE'])
def deleteRec(type):
	data = request.get_json(True,False)
	if type == 'display':
		deleteDisplay(data)
	elif type == 'client':
		deleteClient(data)
	elif type == 'sequence':
		deleteSequence(data)

@app.route('/',defaults={'path': ''})
@app.route('/<path:path>')
@login_required
def catchAll(path):
	return render_template('index.html')
