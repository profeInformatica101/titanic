let pasajeros_titanic = [];

class Pasajero{
  constructor(age, boat, cabin, embarked, fare, from, name, parch, pclass, sex, survived, ticket ){
    this.age = age;
    this.boat = boat;
    this.cabin = cabin;
    this.embarked = embarked;
    this.fare = fare;
    this.from = from;
    this.name = name;
    this.parch = parch;
    this.pclass = pclass;
    this.sex = sex;
    this.survived = survived;
    this.ticket = ticket;
  }

}

function configuracion() {

    //Mapeamos los valores que nos interesan
    pasajeros_titanic = datum.map((c)=> new Pasajero(c["age"], c["boat"],c["cabin"],c["embarked"],c["fare"],c["home.dest"],c["name"],c["parch"],c["pclass"],c["sex"],c["survived"],c["ticket"]));
  
}

function principal(){

  console.log("Total pasajeros_titanic: "+ pasajeros_titanic.length);

     // Muestra gráfico circular de supervivientes y muertos
     grafico_supervivientes_muertos();
     // Muestra gráfico en barras por cada clase supervivientes y muertos
     grafico_clases();

     // Realiza un gráfico circular de hombres y mujeres

     // Realiza un gráfico en barras de hombres y mujeres por cada clase


    /*  ########################
        #  Muestra por consola #
        ########################
    */

    //¿Cómo se llama la persona con mayor edad que sobrevivió?   Nota: ordena y obten el primer elemento de la lista.
    //¿En qué bote se salvó y cuantas personas le acompañaban?

    //¿Cuántos españoles sobrevivieron?¿En qué clase viajaban?
    let total_españoles = pasajeros_titanic.filter(p=>p.from.includes("Spain")).length;
    console.log("Total españoles: "+ total_españoles);


   // ¿Cuántas personas sobrevivieron por cada clase?


   // ¿Qué porcentaje de hombres y mujeres sobrevivieron?


   // ¿Cual es el precio medio por clase?


   // ¿Cual es el precio medio por cada clase de los SUPERVIVIENTES?
   // ¿Cual es la edad media de cada clase?
  //  ¿Cual es la edad media de cada clase de los SUPERVIVIENTE?


}

   function grafico_supervivientes_muertos(){

    const canvas = document.getElementById('chartSuperviviente');
    new Chart(canvas,
   
    {
      type: 'pie',
      data: {
        labels: ["Supervivientes", "Muertos"],
        datasets: [
          {
            label: 'Supervivientes y Muertos',
            data:[ pasajeros_titanic.filter(p=>p.survived =="1").length, pasajeros_titanic.filter(p=>p.survived =="0").length]
          }
        ]
      }
    });
 
 }


  // Gráfico en barras de cada clase supervivientes.
 function grafico_clases(){
  const canvas = document.getElementById('chartClases');
    new Chart(canvas,
   
    {
      type: 'bar',
      data: {
        labels: ["Clase 1", "Clase 2", "Clase 3"],
        datasets: [
          {
            backgroundColor: ["red","green", "blue"],
            label: 'Superviviente',
            data:[ 
              pasajeros_titanic.filter(p=>p.pclass=="1" && p.survived =="1").length,
              pasajeros_titanic.filter(p=>p.pclass=="2" && p.survived =="1").length,
              pasajeros_titanic.filter(p=>p.pclass=="3" && p.survived =="1").length,


            ]
          },
          {
            backgroundColor: ["#00000","#01010", "#01020"],
            label: 'Muertos',
            data:[ 
              pasajeros_titanic.filter(p=>p.pclass=="1" && p.survived =="0").length,
              pasajeros_titanic.filter(p=>p.pclass=="2" && p.survived =="0").length,
              pasajeros_titanic.filter(p=>p.pclass=="3" && p.survived =="0").length,


            ]
          },
        ],
      }
    });
  }




/** Función que devuelve los barcos */
function barcos(){
  let barcos = new Set(pasajeros_titanic.map(p=>p.boat));
  return barcos;
}
/** Función que devuelve las cabinas */
function cabinas(){
  let cabin = new Set(pasajeros_titanic.map(p=>p.cabin));
  return cabin;
}

/** Función que devuelve las clases */
function clases(){
  let clases_posibles = new Set(pasajeros_titanic.map(p=>p.pclass));
  return clases_posibles;
}

function nombreCiudades(){
  let nombre_ciudades = new Set(pasajeros_titanic.map(p=>p.from));
  return nombre_ciudades;
}
function imprimirNombreCiudades(){
  nombreCiudades().forEach(p=>console.log(p));
}

function imprimirNombreMujeres(){
   pasajeros_titanic.filter(p => p.sex === "female").map(p=>p.name).forEach(p=>console.log(p));
}


