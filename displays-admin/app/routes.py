from app import app 
from flask import render_template, request, jsonify
from flask_httpauth import HTTPBasicAuth
from .database.db import getUser, getAll_displays, getAll_sequences, getAll_clients, createDisplay, createClient, createSequence
from werkzeug.security import generate_password_hash, check_password_hash
from .database.auth import registerAuth, authLogin

httpAuth = HTTPBasicAuth()


@httpAuth.verify_password
def verify_password(username, password):
	users = getUser(username)
	if username in users:
		return check_password_hash(users.get(username), password)
	return False

@app.route('/auth/login', methods=['GET','POST'])
def login():
	if request.method == 'POST':
	    username = request.form['username']
	    password = request.form['password']
	    return jsonify(authLogin(username,password))
	elif request.method == 'GET':
		data = request.get_json(True,False)
		return jsonify(authLogin(data.username,data.password))

@app.route('/register', methods=['POST'])
def register():
	user = request.form['username']
	passwd = request.form['password']
	#data = request.get_json()
	print(user)
	return jsonify(registerAuth(user,passwd))

@app.route('/api/client-display',methods=['GET','POST'])
@httpAuth.login_required
def clientDisplay():
	return jsonify({"success":"true"})

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
#@auth.login_required
def catchAll(path):
	return render_template('index.html')
