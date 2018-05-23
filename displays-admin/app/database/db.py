import sqlite3
import click
from flask import current_app, g
from flask_cli import with_appcontext

DATABASE = 'app/database/display.db'

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            DATABASE,
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row
    return g.db

def getAll_displays():
    return query_db("SELECT * FROM client_displays")
    
def getAll_sequences():
    return query_db("SELECT * FROM display_sequences")

def getAll_clients():
    return query_db("SELECT * FROM clients")

def make_dicts(cursor, row):
    return dict((cursor.description[idx][0], value)
                for idx, value in enumerate(row))
    
def createDisplay(data):
    return upsert_db("INSERT INTO client_displays (display_name,client_id, display_type, display_location,display_sequence) VALUES(?,?,?,?,?)",(data['name'],data['client'],data['type'],data['location'],data['sequence']))

def createClient(data):
    return upsert_db("INSERT INTO clients (email,name,address) VALUES(?,?,?)",(data.name,data.email,data.address))
def createSequence(data):
    return upsert_db("INSERT INTO display_sequences (sequence_name,transition_type, image_list,image_loc) VALUES(?,?,?,?)",(data.name,data.type,data.image_list,data.image_loc))

def updateDisplay(data):
    return upsert_db("""UPDATE client_displays SET display_name = ? ,client_id = ?, display_type = ?,display_sequence = ? WHERE display_id = ? """,(data.name,data.client,data.type,data.sequence, data.display_id))

def updateClient(data):
    return upsert_db("""UPDATE clients SET email = ?,name = ?,address = ? WHERE = ? """,(data.name,data.email,data.address))
def updateSequence(data):
    return upsert_db("""UPDATE display_sequences SET sequence_name = ?,transition_type = ?, image_list = ?,image_loc = ? WHERE = ? """,(data.sequence_name,data.transition_type,data.image_list,data.image_loc))

def deleteDisplay(data_id):
    return upsert_db("""DELETE FROM client_displays WHERE display_id = ? """,(data_id))

def deleteClient(data_id):
    return upsert_db("""DELETE FROM clients WHERE client_id = ?""",(data_id))

def deleteSequence(data_id):
    return upsert_db("""DELETE FROM display_sequences WHERE sequence_id = ?""",(data_id))

def getUser(user):
    return query_db("""SELECT * FROM client_auth WHERE username = ?""",(user,),True)

def createUser(username,password):
    upsert_db("""INSERT INTO client_auth (client_id, username, password) VALUES (?, ?, ?)""",(1,username, password))

def query_db(query, args=(), one=False):
    cur = get_db().cursor()
    cur.execute(query, args)
    r = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    #cur.connection.close()
    return (r[0] if r else None) if one else r

def upsert_db(query, args=(), one=True):
    db = get_db()
    cur = db.cursor()
    cur.execute(query, args)
    db.commit()
    #cur.connection.close()

def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()

def init_db():
    db = get_db()
    with current_app.open_resource('database/schema.sql') as f:
        db.executescript(f.read().decode('utf8'))

@click.command('init-db')
@with_appcontext
def init_db_command():
    #"""Clear the existing data and create new tables."""
    init_db()
    click.echo('Initialized the database.')

def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)
