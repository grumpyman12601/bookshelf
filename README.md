# ![icon](https://github.com/user-attachments/assets/3441f74c-7576-4e61-8126-a825ffc3a5a6)   bookshelf

[![Github All Releases](https://img.shields.io/github/downloads/grumpyman12601/bookshelf/total.svg)]()


Bookshelf is an extension made to hide the shelf on Windows 10/11 and ChromeOS. It works on all versions of both.


On Windows, it takes up a single pixel in the corner of your screen.

On Chromebook, it takes up a very small amount of your screen, and there is no way to fix this.

#
Livepaper is another extension that allows you to have live wallpapers on ChromeOS.

Install Livepaper [HERE](https://github.com/supechicken/ChromeOS-LivePaper)

These two extensions work very well together to clean up your desktop enviroment, and I use both 24/7.
#
## What you need
- The ability to install unpacked extensions
- Possibly debug skill, read #[Issues](https://github.com/grumpyman12601/bookshelf#issues) for help if the extension doesn't work for you.
- A Chromebook or Windows device

# Installation
1. Download this repository and unpack it
2. I reccomended to put it somewhere the directory isn't going to get deleted on accident
3. Enable dev mode on chrome://extensions
4. Click on the "Load Unpacked" icon
5. Select the root file directory for the extension, and click open

# Usage
### ChromeOS
1. Right click your desktop, and select "Autohide Shelf"
2. Click on the extension
3. Click "Start"
4. Move the icon to the corner of your screen, just enough that the window is 90% offscreen. This will work without float mode
5. On LivePaper flip the "Stop live wallpaper when window focused" switch. You have to do this because bookshelf works by displaying a tab that's always on your desktop to keep the taskbar hidden.

Tip: If you grab the last pixel of the tab, you can move it farther without the window latching onto the half icon.
When you're done, it should look like this:

![bookshelf on ChromeOS](https://github.com/grumpyman12601/bookshelf/assets/101584530/b001ab54-f868-4738-8ced-e87a7a362919)


### Windows
1. Right click your taskbar, and go into Taskbar Settings
2. Click on "Taskbar Behavior"
3. Enable "Automatically Hide The Taskbar"
4. Click on the extension icon
5. Click "Start"
6. Click on the icon on the window it opens
7. Select "Move"
8. Use your arrow keys to move the window into the bottom right of your screen

When you're done, it should look like this:

![bookshelf on Windows](https://github.com/user-attachments/assets/7d648c10-f6ad-44cb-bee3-cfbdfbd25bae)



Super extra cool tip: Change the icon.png file in the file directory to whatever you want it to be, and you can customize the little icon in the corner of your screen to something cooler, like the "invisible" icon below

Save this image: ![Invisibleicon](https://github.com/grumpyman12601/bookshelf/assets/101584530/f3db1357-bb05-4fed-b6fa-be78c3d4380b)

If you run into issues, open an issue report, and I can hopefully help.

### Issues
Tab can't completely dissapear unless you use Firefox and the window.hide() function.

window.close() is an error that might pop up in the extension error tracker, it's just an unsafe hash and I'm planning on reusing that line of code and didn't feel like republishing it before I add new features.

### Testing and patching
I am very unfamiliar with coding in HTML, JS, or CSS because all of my current experience is in shell scripting.

Any help/patches would help because even I can admit this extension sucks.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## ISSUE/S FOR DEVELOPER (S)
### Error #1
The tab still shows up, but there is no way to fix this, unless I add a move button that moves it offscreen more to avoid latching to the half-page display option. This will not fix the problem but just make it less apparent. As far as I know unless you use firefox it's impossible to completely hide a tab.
