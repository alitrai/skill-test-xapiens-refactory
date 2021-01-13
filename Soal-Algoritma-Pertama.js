var kepala = 1;
var nol = 1000000;
var hasil;

while (nol >= 1) {
    hasil=kepala*nol;
    console.log(hasil);
    kepala++;
    nol /= 10;
}