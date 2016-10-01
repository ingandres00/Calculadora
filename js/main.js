var numero1 = parseInt(prompt('Ingrese su primer número',""));
var numero2 = parseInt(prompt('Ingrese su Segundo número',""));
var operacion = prompt("Ingrese la Operación: suma, resta, multiplicacion,division, mod","");
var resultado = 0;

console.log(numero1);
console.log(numero2);

	if (operacion=="suma" || operacion =="Suma" || operacion == "SUMA"){
			resultado = numero1 + numero2;
      document.write(resultado);
		}
  if (operacion=="resta" || operacion =="Resta" || operacion == "RESTA"){
    resultado = numero1 - numero2;
    document.write(resultado);
  }
  if (operacion=="multiplicacion" || operacion =="Multiplicacion" || operacion == "MULTIPLICACION"){
    resultado = numero1 * numero2;
    document.write(resultado);
  }
  if (operacion=="division" || operacion =="Division" || operacion == "DIVISION"){
    resultado = numero1 / numero2;
    document.write(resultado);
  }
  if (operacion=="mod" || operacion =="Mod" || operacion == "MOD"){
    resultado = numero1%numero2;
    document.write(resultado);
  }
