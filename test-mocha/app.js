const express = require("express");
const bodyParser = require("body-parser");
const { SendMessage } = require("./routes");

// conversando com o servidor
//const express = require('express');
const app = express();
app.use(bodyParser.json());



///tentando integrar watson assistant com as referencias da API DOCS V1
app.post("/mensagem", (req, res) => {
  SendMessage(req.body).then(resp=>{
   res.send(resp)
  })
});

app.listen(3000, function() {
  console.log("Ok, listening on port 3000!");
});
