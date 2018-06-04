# Ubiqity Displays
## This is a Client Server application for IoT displays
A client display consists of a Raspberry Pi unit running a custom Raspbian OS with a client application ran as a service upon startup. The client application logs in to the sever application getting the sequence template to display and the images to display in the template. The admin app allows the administrator to change all aspects of the display, sequence, or client information. 

#### Installation:
##### Backend 
```bash
$ git clone https://github.com/kellySmi/ubiquityDisplays.git
$ cd ubiquityDisplays/displays-admin/
$ python3 -m venv env
$ . env/bin/activate
$ pip3 install Flask
$ export FLASK_APP=run.py
$ flask run
```
##### Frontend
```bash
$ cd ubiquityDisplays/displays-admin/app/static
$ npm install 
$npm run build
```



