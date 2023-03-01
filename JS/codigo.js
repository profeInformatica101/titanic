let datum;
function readData(file,id){
    console.log("Leyendo los datos");
    d3.csv(file, processData)
    .then((data) => graph(data,id))
    .catch((error)=> console.log("error: "+error.message));
}

function processData(datum){
    return datum;
}

function graph(data, id){
    datum = data;
    console.log(datum);
    //console.log(id,data);
    configuracion();
    principal();
}


window.onload = function () {
    readData(
      "https://raw.githubusercontent.com/profeInformatica101/HojasDeCalculo/main/titanic3.csv",
      "#contenedor"
    );
  };

  //v2 --> https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv