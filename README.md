# Bookshelf

[![Github All Releases](https://img.shields.io/github/downloads/grumpyman12601/bookshelf/total.svg)]()



This is an extension made to hide the shelf on ChromeOS devices. It should work on all versions of ChromeOS that support desk hiding when a page is displayed on screen.

Livepaper is another extension that allows you to have live wallpapers on ChromeOS.

Install Livepaper [HERE](https://github.com/supechicken/ChromeOS-LivePaper)

These two extensions work very well together to clean up your desktop enviroment, and I use both 24/7.

## What you need
- The ability to install unpacked extensions
- Possibly debug skill, read #[Issues](https://github.com/grumpyman12601/bookshelf#issues) for help if the extension doesn't work for you.
- A Chromebook
- All 46 ChromeOSomes

# Installation
1. Download this repository
2. Enable dev mode on chrome://extensions
3. Click on the "Load Unpacked" icon
4. Select the root file directory for the extension, and click open

# Usage
Make sure you have your shelf set to "Autohide shelf" so the shelf hides when a tab is onscreen, even if it isn't fullscreened.
1. Click on the extension
2. Click "Start"
3. Move the icon to the corner of your screen, just enough that the window is 90% offscreen. This will work without float mode
4. On LivePaper flip the "Stop live wallpaper when window focused" switch. This is because this extension uses a tab that's always on your screen to keep the taskbar hidden

Tip: If you grab the last pixel of the tab, you can move it farther without the window latching onto the half icon.

Super extra cool tip: Change the icon.png file in the file directory to whatever you want it to be, and you can customize the little icon in the corner of your screen to something cooler, like the "invisible" icon below

Save this image: ![Invisibleicon](https://github.com/grumpyman12601/bookshelf/assets/101584530/f3db1357-bb05-4fed-b6fa-be78c3d4380b)


![bookshelf in use](https://github.com/grumpyman12601/bookshelf/assets/101584530/b001ab54-f868-4738-8ced-e87a7a362919)

Download my wallpaper [HERE](https://www.artstation.com/artwork/GXwZgz)

If you run into issues, open an issue report, and I can hopefully help.

### Issues
Tab can't dissapear unless you use Firefox and the window.hide() function.
window.close() is an error that pops up every time you use an extension, it's just an unsafe hash and I'm planning on reusing that line of code and didn't feel like republishing it before I add new features.

### Testing and patching
I am very unfamiliar with coding in HTML, JS, or CSS because all of my current experience is in shell scripting.

Any help/patches would help because even I can admit this extension sucks.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## ISSUE/S FOR DEVELOPER (S)
### Error #1
The tab still shows up, but there is no way to fix this, unless I add a move button that moves it offscreen more to avoid latching to the half-page display option. This will not fix the problem but just make it less apparent. As far as I know unless you use firefox it's impossible to completely hide a tab.
