DROP TABLE IF EXISTS client_auth;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS client_locations;
DROP TABLE IF EXISTS client_displays;
DROP TABLE IF EXISTS display_types;
DROP TABLE IF EXISTS display_sequences;

CREATE TABLE client_auth (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  FOREIGN KEY (client_id) REFERENCES clients (client_id)
);
CREATE TABLE clients (
  client_id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_email TEXT UNIQUE NOT NULL,
  client_name TEXT NOT NULL,
  address TEXT NOT NULL
);
CREATE TABLE client_locations (
  location_id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  location_name TEXT UNIQUE NOT NULL,
  location_address TEXT NOT NULL,
  FOREIGN KEY (client_id) REFERENCES clients (client_id)
);
CREATE TABLE client_displays (
  display_id INTEGER PRIMARY KEY AUTOINCREMENT,
  display_name TEXT NOT NULL,
  display_location INTEGER NOT NULL,
  client_id INTEGER NOT NULL,
  display_type INTEGER NOT NULL,
  display_sequence INTEGER NOT NULL,
  FOREIGN KEY (client_id) REFERENCES clients (client_id),
  FOREIGN KEY (display_location) REFERENCES client_locations (location_id),
  FOREIGN KEY (display_type) REFERENCES display_types (type_id),
  FOREIGN KEY (display_sequence) REFERENCES display_sequences (sequence_id)
);
CREATE TABLE display_types (
  type_id INTEGER PRIMARY KEY AUTOINCREMENT,
  type_value TEXT NOT NULL
);
CREATE TABLE display_sequences (
  sequence_id INTEGER PRIMARY KEY AUTOINCREMENT,
  transition_type TEXT NOT NULL,
  sequence_name TEXT NOT NULL,
  image_list TEXT NOT NULL,
  image_loc TEXT NOT NULL
);
INSERT into display_types (type_value) values('ads');
INSERT into display_types (type_value) values('games');

INSERT into clients (client_email,client_name,address) values('mike@pjwheelhouse.com','Pjs Wheelhouse','123 Main.st,Monkyunk,PA');
INSERT into clients (client_email,client_name,address) values('joe@joespub.com','Joes Pub','425 Lafyette St,NYC,NY');

INSERT into client_locations (client_id,location_name,location_address) values(1,'Pjs Whello 1','Conshocken');
INSERT into client_locations (client_id,location_name,location_address) values(1,'Pjs Whello 2','KoP');
INSERT into client_locations (client_id,location_name,location_address) values(2,'JoesPub 1','Mahattan');
INSERT into client_locations (client_id,location_name,location_address) values(2,'JoesPub 4','Brooklyn');

INSERT into client_displays (client_id,display_name,display_location,display_type,display_sequence) values(1,'PJ1-D1',1,1,1);
INSERT into client_displays (client_id,display_name,display_location,display_type,display_sequence) values(1,'PJ1-D2',2,1,1);
INSERT into client_displays (client_id,display_name,display_location,display_type,display_sequence) values(2,'JP1-D1',3,1,1);
INSERT into client_displays (client_id,display_name,display_location,display_type,display_sequence) values(2,'JP1-D1',4,1,1);

INSERT into display_sequences (transition_type,sequence_name,image_list,image_loc) values('none','initial sequence', 'display1.jpg,display2.jpg,display3.jpg,display4.jpg,','img');
