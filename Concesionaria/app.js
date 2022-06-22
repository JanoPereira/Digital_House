let concesionaria = {
    autos: require('./autos'),
  
    buscarAuto: function(patente) {
       let arrayAutos = this.autos.filter(auto => auto.patente === patente);
       return (arrayAutos.length >0 ? arrayAutos[0]:null)
    },
 
    venderAuto: function (patente){
       let auto = this.buscarAuto(patente);
       if (auto && !auto.vendido){
          auto.vendido = true;
       }
       return auto;
    },
 
    autosParaLaVenta: function () {
       return this.autos.filter(auto => !auto.vendido)
    },
    
    autosNuevos: function(){
       let autosVenta = this.autosParaLaVenta();
       return autosVenta.filter(auto => auto.km<100)
    },
 
    listaDeVentas: function(){
       let autosVendidos = this.autos.filter(auto => auto.vendido)
       return autosVendidos.map(auto => auto.precio)
    },
 
    totalDeVentas: function (){
       return this.listaDeVentas().reduce((suma,auto)=> suma+auto,0);
    },
    
    puedeComprar: function(auto,persona){
       let capacidadTotal = persona.capacidadDePagoTotal;
       let capacidadCuotas = persona.capacidadDePagoEnCuotas;
       return (capacidadTotal >= auto.precio && capacidadCuotas >= (auto.precio /auto.cuotas));
    }
    
 }
 console.log(concesionaria.puedeComprar({
    precio: 150000 ,
    cuotas: 12 
 },
 {  nombre: 'Juan',
    capacidadDePagoEnCuotas: 100  ,
    capacidadDePagoTotal: 100000000
    }));