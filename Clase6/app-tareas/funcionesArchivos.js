const fs = require('fs');
module.exports= {
    file: 'tareas.json',
    leerArchivo : function () {
        const archivoTareas = fs.readFileSync(this.file,'utf-8')
        return  JSON.parse(archivoTareas);
    },
    escribirJSON: function (tareas) {
        const tarea = JSON.stringify(tareas,null,'    ')
        fs.writeFileSync(this.file,tarea)
    },
    guardarTarea: function(nuevaTarea) {
        let tareas = this.leerArchivo();
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas);
    },
    leerPorEstado: function (estado){
        let tareas= this.leerArchivo();
        return tareas.filter(valor=> valor.estado == estado)
    }
}

