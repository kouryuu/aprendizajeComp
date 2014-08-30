


var circle = d3.selectAll("circle");

circle.style("fill","green");


// Función aleatoria que genera un número entre 1 y 6 simulando la cara de un dado.

function rollDice(){
  return (Math.round(Math.random()*10)%6)+1;
}

// Esta función simula n tiradas de dados con la función rollDice.
// El parámetro n indica el número de veces que se desea tirar el dado.
// El parámetro tiradas es un arreglo dónde se guardan las tiradas debe tener dimensión 10.
// regresa el arreglo con el resultado de las suma de las tiradas de a dos dados.

function sim(n,tiradas){
  j = 1;

  while(j<n){
    first = rollDice();
    second = rollDice();
    result = first+second;
    tiradas[result-2] = tiradas[result-2] + 1;
    j++;
  }
  return tiradas;
}

// Esta función pinta los valores como círculos con radio equivalente a la suma de observaciones de los dados
// dada por la función sim.
// El parámetro n indica el numero de simulaciones que se realiza en los distintos lapsos

function draw(n){
  var i=1;
  var tiradas = new Array(0,0,0,0,0,0,0,0,0,0,0);
  var inter = setInterval(function(){
    if(i==n){
      clearInterval(inter);
    }
    sim(100,tiradas);
    circle.data(tiradas);
     circle.attr("r", function(d) {console.log(d);return d;});
    i++;
  }
    ,1000
  );


}
 draw(10);
