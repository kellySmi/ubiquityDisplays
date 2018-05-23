-- boilerplate data
INSERT into display_types (type_value) values('ads');
INSERT into display_types (type_value) values('games');

----------- test data
-- clients
INSERT into clients (client_email,client_name,address) values('mike@pjwheelhouse.com','Pjs Wheelhouse','123 Main.st,Monkyunk,PA');
INSERT into clients (client_email,client_name,address) values('joe@joespub.com','Joes Pub','425 Lafyette St,NYC,NY');

-- locations per client
INSERT into client_locations (client_id,location_name,location_address) values(1,'Pjs Whello 1','Conshocken');
INSERT into client_locations (client_id,location_name,location_address) values(1,'Pjs Whello 2','KoP');
INSERT into client_locations (client_id,location_name,location_address) values(2,'JoesPub 1','Mahattan');
INSERT into client_locations (client_id,location_name,location_address) values(2,'JoesPub 4','Brooklyn');

-- displays per location
INSERT into client_displays (client_id,display_name,display_location,display_type,display_sequence) values(1,'PJ1-D1',1,1,1);
INSERT into client_displays (client_id,display_name,display_location,display_type,display_sequence) values(1,'PJ1-D2',2,1,1);
INSERT into client_displays (client_id,display_name,display_location,display_type,display_sequence) values(2,'JP1-D1',3,1,1);
INSERT into client_displays (client_id,display_name,display_location,display_type,display_sequence) values(2,'JP1-D1',4,1,1);

--- display sequences
INSERT into display_sequences (transition_type,sequence_name,image_list,image_loc) values('none','initial sequence', 'display1.jpg,display2.jpg,display3.jpg,display4.jpg,','img');
