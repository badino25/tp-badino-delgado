const fs = require('fs');
const path = require('path');
const archivoRegistro = path.join(__dirname,"../logs", "userLogs.txt" );


function registroRutas (req,res,next){
fs.appendFileSync(archivoRegistro,'El usuario ingreso a la ruta:'+ req.url + '\n');

next();

}


module.exports = registroRutas;