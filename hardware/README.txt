SD Card Setup after raspbian install using etch

sudo apt-get install --no-install-recommends xserver-xorg x11-xserver-utils xinit openbox
sudo apt-get install --no-install-recommends chromium-browser

/etc/xdg/openbox/autostart
`--------------------
# Disable any form of screen saver / screen blanking / power management
xset s off
xset s noblank
xset -dpms

# Allow quitting the X server with CTRL-ATL-Backspace
setxkbmap -option terminate:ctrl_alt_bksp

# Start Chromium in kiosk mode
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' ~/.config/chromium/'Local State'
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/; s/"exit_type":"[^"]\+"/"exit_type":"Normal"/' ~/.config/chromium/Default/Preferences
chromium-browser --disable-infobars --kiosk 'http://129.168.11.1:5000/service/display'
`--------------------

~/.bash_profile
`----------------------
[[ -z $DISPLAY && $XDG_VTNR -eq 1 ]] && startx -- -nocursor
`---------------------

sudo apt-get install fbi

/etc/init.d/asplashscreen
`--------------------
#! /bin/sh
### BEGIN INIT INFO
# Provides:          asplashscreen
# Required-Start:
# Required-Stop:
# Should-Start:      
# Default-Start:     S
# Default-Stop:
# Short-Description: Show custom splashscreen
# Description:       Show custom splashscreen
### END INIT INFO


do_start () {

    /usr/bin/fbi -T 1 -noverbose -a /etc/splash.png    
    exit 0
}

case "$1" in
  start|"")
    do_start
    ;;
  restart|reload|force-reload)
    echo "Error: argument '$1' not supported" >&2
    exit 3
    ;;
  stop)
    # No-op
    ;;
  status)
    exit 0
    ;;
  *)
    echo "Usage: asplashscreen [start|stop]" >&2
    exit 3
    ;;
esac

:
`-------------------
chmod a+x /etc/init.d/asplashscreen

insserv /etc/init.d/asplashscreen


SD Card Backup 
(mac)
Use the standard dd tool:
dd if=/dev/rdiskx of=/path/to/image bs=1m

Where /dev/rdiskx is your SD card.
(using rdisk is preferable as its the raw device - quicker)
To find out which disk your device is type diskutil list at a command prompt - also, 
you may need to be root; to do this type sudo -s and enter your password when prompted.