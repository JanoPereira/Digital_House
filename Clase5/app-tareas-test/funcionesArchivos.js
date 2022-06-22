const fs = require('fs')

module.exports = {
    listar : ()=>{
        const archivoTareas = fs.readFileSync('tareas.json','utf-8');
        return JSON.parse(archivoTareas);
    }
}