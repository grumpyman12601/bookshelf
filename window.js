// Add an event listener to handle the click event
document.getElementById('openPage').addEventListener('click', function(event) {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();

  // Open a new window with specified dimensions and styles
  var win = window.open('', 'transparentWindow', 'width=1,height=1,top=1,left=1,toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0');

  // Write content into the new window
  win.document.write(`
    <html>
      <head>
        <title>⠀</title>
        <style>
          /* Apply transparent background */
          body {
            background-color: transparent;
            margin: 0;
            padding: 0;
          }
          /* Make the window transparent */
          html, body {
            opacity: 0;
          }
        </style>
      </head>
      <body>
        <h1>⠀h1>
      </body>
    </html>
  `);

  // Make the window draggable if needed
  win.document.addEventListener('mousedown', function(event) {
    // Code for dragging the window if necessary
  });
});
