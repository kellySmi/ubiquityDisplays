class User():
	def __init__(self, id, pw, name):
		self.id = id
		self.password = pw
		self.username = name

	def __repr__(self):
		return "User(id=%s, password=%s, name=%s)" % (self.id, self.pw, self.name)