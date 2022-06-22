const funcionesTareas = require('./funcionesArchivos');

const tareas = funcionesTareas.leerArchivo();
const arg = process.argv[2]
switch(arg){
    case 'listar':
        console.log("Listado de tareas");
        console.log('------------------');
        tareas.forEach((tarea,index)=>{
            console.log(`${index+1}. ${tarea.titulo} - ${tarea.estado}`)
        })
        break;
    case 'crear':
        const titulo= process.argv[3];
        const tarea = {
            titulo,
            estado: "pendiente"
        };
        funcionesTareas.guardarTarea(tarea);
        break;
    case 'filtrar':
        let estado = process.argv[3];
        let tareasFiltradas = funcionesTareas.leerPorEstado(estado);
        tareasFiltradas.forEach((tarea)=>{
            console.log(tarea.titulo);
        })
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
