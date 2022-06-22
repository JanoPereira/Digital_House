const funcionesTareas = require('./funcionesArchivos');

const tareas = funcionesTareas.listar();
const arg = process.argv[2]
switch(arg){
    case 'listar':
        console.log("Listado de tareas");
        console.log('------------------');
        for(let i=0;i<tareas.length;i++){
            console.log(`${i+1}. ${tareas[i].titulo} - ${tareas[i].estado}`)
        }
        break;
    case undefined:
        console.log("Atencion - Tienes que pasar una accion");
        console.log(`Las acciones disponibles son: listar`);
        break;
    default:
        console.log('No entiendo que hacer');
        console.log(`Las acciones disponibles son: listar`);
        break;
}
