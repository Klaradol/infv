// Definice pole čísel
const cisla = [3, 7, 2, 9, 12];

// Nalezení nejvyššího čísla
let nejvyssi = cisla[0];
for (let i = 1; i < cisla.length; i++) {
    if (cisla[i] > nejvyssi) {
        nejvyssi = cisla[i];
    }
}

// Nalezení nejnižšího čísla
let nejnizsi = cisla[0];
for (let i = 1; i < cisla.length; i++) {
    if (cisla[i] < nejnizsi) {
        nejnizsi = cisla[i];
    }
}

// Vypsání výsledků
console.log("Nejvyšší číslo:", nejvyssi);
console.log("Nejnižší číslo:", nejnizsi);
