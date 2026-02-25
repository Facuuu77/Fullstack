sequenceDiagram
 participant browser
 participant server

 Note right of browser: The user writes the note and clicks 'Save'
 Note right of browser: The SPA JS adds the note to the list locally and re-renders it

 browser->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
 activate server
 server-->> browser: HTTP 201 created (JSON confirming success)
 deactivate server
