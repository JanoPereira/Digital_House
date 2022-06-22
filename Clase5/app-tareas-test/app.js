const funcionesTareas = require('./funcionesArchivos');
const tareas = funcionesTareas.listar();
const argumentos= process.argv[2];
switch(argumentos){
    case 'listar':
        console.log(`Las tareas son: ${tareas.map((v)=>{return v.titulo}).join(' - ')}`);
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log(`No entiendo qué quieres hacer.`);
        break;
}