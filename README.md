
# Bookshelf v3 (v2 was horrible, no release will ever go public)
This is bookshelf v3, it's a much simpler design with minimal installation, just use it like a regular extension.

### What you need
- The ability to install unpacked extensions
- Possibly debug skill, read # Issues for help if the extension doesn't work for you.
- ChromeOS version v115 for tab floating

## Installation
1. Download this repository
2. Enable dev mode on chrome://extensions
3. Click on the "Load Unpacked" icon
4. Select the root file directory for the extension, and click open

## Usage
1. Click on the extension
2. Click "Open"
3. Hold your mouse over the tabs icon for the window that opened, until a dropdown menu appears, select "Float"
5. Click on the "Move Window" button on the extension

// THE WINDOW MAY NOT MOVE FULLY OFFSCREEN, IF THIS HAPPENS, LOOK AT #Issues
### Issues
Some issues that you may encounter is that the window doesn't move fully offscreen, to fix this just go find the movetab.js file and switch the X and Y variables to farther away or closer depending on your device:


function moveWindow() {

  // Change as needed, will not break. Example (100, 100)
  
  window.moveTo(X, Y);
  
}


## Testing and patching
I am very unfamiliar with coding in HTML, JS, or CSS because all of my current experience is in shell scripting.

Any help/patches would help because even I can admit this extension sucks.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ISSUES FOR DEVELOPER (S)
Move Window button doesn't work

Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-zPfYWQvzeOa6U9LKMTnTy8OrZHmtWidneiXht27Up/E='), or a nonce ('nonce-...') is required to enable inline execution.
Context
popup.html
Stack Trace
popup.html:24 (anonymous function)

<script>window.name = '2';</script>
