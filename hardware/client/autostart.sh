# sudo apt-get install unclutter
# nano /home/pi/.config/lxsession/LXDE-pi/autostart

@chromium-browser —kiosk http://localhost:3000
@unclutter -idle 0.1 -root

#http-server /home/pi/clientApp
# Start Chromium in kiosk mode
#sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' ~/.config/chromium/'Local State'
#sed -i 's/"exited_cleanly":false/"exited_cleanly":true/; s/"exit_type":"[^"]\+"/"exit_type":"Normal"/' ~/.co$
#chromium-browser --disable-infobars --kiosk 'http://127.0.0.1'