let numero = 1; // numero es 1
let i = 0; // i es 0
do {
  if (i === 0) {
    // Reduce numero si i es 0 y augmenta i
    i++;
    numero--;
    console.log(numero);
  } else {
    // Augmenta numero si i no es 0
    numero++;
    console.log(numero);
  }
} while (numero < 5); // Termina el bucle si numero es mayor a 5
