const zodiac = require('zodiac-signs')();
const module1 = require("./module1")
const tomasOlarte = require('./tomas_olarte');
const janoPereira = require('./jano_pereira');
const franco = require ('./franco');
const aristeo = require ('./aristeo_maya');
const alejo = require ('./alejo_gonzalez');
console.log('Hola, soy ' + tomasOlarte[0] + ', disfruto ' + tomasOlarte[1] + ' y soy de ' + tomasOlarte[2]);
console.log(`Hola, soy ${janoPereira[0]}, disfruto de ${janoPereira[1]} y soy de ${janoPereira[2]}`);
console.log ('Hola, soy ' + franco[0] + ', disfruto ' + franco[1] + ' y soy de ' + franco[2]);
console.log(`Hola, soy ${aristeo[0]}, disfruto de ${aristeo[1]} y soy de ${aristeo[2]}`);
console.log(`Hola, soy ${alejo[0]}, disfruto de ${alejo[1]}, y soy de ${alejo[2]}`); 
// Zodiac
console.log(zodiac);
//console.log(zodiac.getSignByDate({day: 26, month: 9}));
