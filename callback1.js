#!/usr/bin/node
//console.log(somma_e_raddoppia(1,2,function(c) {return c*2}));
console.log(somma_e_raddoppia(1,2,n => n*2));

function somma_e_raddoppia(a,b,raddoppia) {
  return raddoppia(a+b);
}
