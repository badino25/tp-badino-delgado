const fs = require('fs');
const admins = [
 'Greta', 'Ada', 'Vim', 'Tim',
];

function checkUser(req, res, next) {

    const admin = req.body.usuario;
    if (admins.includes(admin)) {
        res.send('Hola ' + admin + ' usted tiene permiso de ingreso.' );
        fs.appendFileSync(archivoRegistro,'El usuario ingreso a la ruta:'+ req.body.usuario + '\n');
        

        next();
    } else { 
        res.send('Hola ' + admin + ' no puede ingresar si no es adiministrador.');
        fs.appendFileSync(archivoRegistro,'El usuario ingreso a la ruta:'+ req.body.usuario + '\n');
    }

}


module.exports = checkUser;