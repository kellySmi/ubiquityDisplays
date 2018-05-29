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
