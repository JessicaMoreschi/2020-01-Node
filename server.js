console.log("node is running")


// crea local server
let express = require("express"); //Load the express code
let app = express(); //create local host
let port = 3000;  //dichiara server port (3000 standard)
let server = app.listen(port);  //aspetta che qualcuno si connetta (da browser "localhost:3000")
                                //per stoppare (ctrl+c); per riavviare "node server.js" (da terminale)

//crea folder per client ("public")
app.use(express.static("public")); //mostra ai clienti la certella public
