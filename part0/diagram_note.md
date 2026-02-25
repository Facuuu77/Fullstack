sequenceDiagram
 participant browser
 participant server

 Note right of browser: The user writes the note and pulse 'Save'

 browser->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
 activate server
 Note left of server: The server stores the note in the 'notes' array
 server -->> browser: HTTP 302 (URL redirect to /notes)
 deactivate server

 Note right of browser: The browser reloads the notes page following the redirect

 browser->> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
 activate server
 server-->> browser: HTML document
 deactivate server

 browser->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
 activate server
 server-->> browser: the css file
 deactivate server

 browser->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
 activate server
 server-->> browser: the JavaScript file
 deactivate server

 Note right of browser: The JS starts executing and requests the JSON from the server

 browser->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
 activate server
 server-->> browser: [{ "content": "tu nota nueva", "date": "2024..." }, ... ]
 deactivate server

 Note right of browser: The browser executes the callback and renders the updated notes
 
