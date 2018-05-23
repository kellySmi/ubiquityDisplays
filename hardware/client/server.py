import random
import os
import './clientDisplays'
from flask import Flask, g, redirect, flash, render_template, jsonify, request, session
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jsglue import JSGlue

app = Flask(__name__, template_folder="templates", static_folder="display-static")
jsglue = JSGlue(app)
#from db import *
#db.init_app(app)

# @app.route('/',)
# def index():
# 	#return jsonify({"name":"success"})
#     return render_template('index.html')

# @app.route('/service/datagrid')
# def gridData():
# 	cur = get_db().cursor()
# 	return jsonify(cur)

@app.route('/api/client-display',methods=['GET'])
def getDisplays():
	#display demo here
	#get client info 
	#
	image_ar = ['display1.jpg','display2.jpg','display3.jpg']
	intval = 10000 # 10 secs
	return render_template('display1.html', image_ar=image_ar, intval=intval)


#def displaylogin():
	#if request.method == 'POST':
		#client_data = request.get_json(force=True)
		#client_id = request.arg.client_id
		#db = get_db()
		#error = None
		#return jsonify({auth:client_id})
		#client = db.execute('SELECT * FROM client_auth WHERE client_id = ?',(client_id,)).fetchone()

		# if client is None:
		# 	error = 'Incorrect client id.'
		# elif not check_password_hash(user['password'], password):
		# 	error = 'Incorrect password.'

		# if error is None:
		# 	session.clear()
		# 	session['client_id'] = client['id']
	        #return redirect(url_for('index'))
			
	#flash(error)
	#return render_template('auth/login.html')
	#login display and return display
	#return url('/displayLogin')
	#return jsonify(data)

if __name__ == '__main__':
    app.run(host= '0.0.0.0')
