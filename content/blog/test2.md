Title: Designing SSH terminal UI for fast access to unix-like servers from mobile devices 2
Date: 2013-01-30 06:02
Tags: serverauditor
Author: Roman Kudiyarov

We at Crystalnix started [Serverauditor](http://serverauditor.com "Serverauditor") about a year ago to design ssh terminal specially for touch devices. There are already a lot of ssh terminals for iOS and Android platforms but they are not perfect so we decided to design and build one more from scratch.

One of the challenges that needed to be solved at the beginning was extra buttons, e.g. Ctrl, Alt, Tab, Fn, Arrow keys were missing on a mobile keyboard and are essential for comfortable work in vi, emacs or mc. In addition, in emacs you have to press Ctrl-x Ctrl-s to save a file, it’s impossible to push two buttons at the same time when you type using only one finger. Also from time to time you scroll through a long log file or read a manual page and it’s good to do on a full screen without any visible buttons. Keeping all that in mind we started to design Serverauditor.

The biggest issue is the small screen that all mobile devices have. We didn’t like the idea of adding an extra row of buttons to the built-in keyboard. It would leave a smaller space for the work area and for some devices makes useless the whole idea of a mobile ssh.

However the biggest advantage with touch devices is that you can draw buttons or other UI elements where you want and how you want. You can even use touch gestures instead of UI elements. We made one finger swipes for arrow-keys generation, e.g up/down, left/right. Two fingers swipe to generate Page Up/Down and Home/End. Double tap gesture to generate the tab key. These are nine useful keys without cutting into the workspace at all!

Apple uses semi transparent buttons making UI for Camera app that are drawn over the picture. It seemed to us as a very good approach for other onscreen buttons because there is no other well known touch gestures. Having an on screen Ctrl button does not make it less painful to type Ctrl-x Ctrl-s or even impossible to push Meta-Ctrl-\ . Therefore in Serverauditor Ctrl\Alt buttons have three states: initial, pushed and locked. A button becomes pushed after you make the tap gesture on it and returns back to initial state after pushing one more keyboard button. Lock state is similar to the way how the Caps Lock button works on regular keyboard but to lock it you have to use the swipe gesture. All these states are animated and buttons change their appearance accordingly. Esc, F1 - F10 and Hide(go to connection list) were placed on top using one common style for onscreen elements.
Most of the latest mobile phones have volume buttons and accelerometer. We’ve got an idea that it could be fun to send SIGINT(Ctr-C) to the process shaking the device. Volume buttons in Serverauditor work as additional Enter or Space for full screen reading. So you can read your log files or manual pages fullscreen using hard volume buttons.

This approach seems to work well so most feedbacks from App Store and Google Play are positive. Also we’ve noticed that several people were confused because UI elements were hidden at the beginning and you have to tap one time to get to see them. In the next release we are going to fix this and make the approach more intuitive.
