class Config(object):
    SECRET_KEY = 'random secret key for development'
    HASH_ALGORITHM = 'HS512' 
    # hash algorithm to use at encode and decode token
    JWT_COOKIE_NAME = 'token'
    TOKEN_NAME='token'
	# token name to be used
    SESSION_TYPE = 'filesystem'
    # if you don't specify HASH_ALGORITHM or JWT_COOKIE_NAME,
    # they will have default value. (HS512 and token)
	