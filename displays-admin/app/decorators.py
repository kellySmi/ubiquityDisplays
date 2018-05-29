from flask import request, abort, g
from flask.ext import login

def requires_auth(f):
	@wraps(f)
	def decorated(*args, **kwargs):
		auth = request.authorization
		if not auth:  # no header set
			if login.current_user.is_authenticated:  # check active session
				g.user = login.current_user
				return f(*args, **kwargs)
			else:
				abort(401)
		user = UserModel.query.filter_by(username=auth.username).first()
		if user is None or user.password != auth.password:
			abort(401)
		g.user = user
		return f(*args, **kwargs)
	return decorated