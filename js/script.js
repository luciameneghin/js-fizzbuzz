// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// stampo i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  // calcolo dei multipli di 3 && 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
    // calcolo dei multipli di 3
  } else if (i % 3 === 0){
    console.log('Fizz');
    // calcolo dei multipli di 5
  } else if (i % 5 === 0) {
    console.log('Buzz');
    // stampa dei numeri se non corripondono a nessuna delle condizioni sopra
  } else {
    console.log(i);
  }
}

