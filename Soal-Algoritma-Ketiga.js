var teks = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio."
var n= teks.length;
var alfabet= 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDE'

function hitungHuruf(string, huruf){
    var hitung=0;
    var kalimat=teks.toUpperCase();
    for (var i=0;i<n;i++){
        if(kalimat.charAt(i)==huruf){
            hitung++
        }
    }
    var jumlah='Karakter ' + huruf + ' sebanyak ' + hitung + ' kali.';
    console.log(jumlah);
}

for (var j=0;j<26;j++){
    hitungHuruf(teks,alfabet[j]);
}

var teks2= ''

function gantiHuruf (huruf){
    var letter=huruf.toUpperCase();
    var i=0;
    while (i<26) {
        if (letter==alfabet[i]){
            i+=5;
            letter=alfabet[i];
            break
        } else{
            i++;
        }
    }
    teks2 += letter
}

for (var i=0;i<n;){
    gantiHuruf(teks[i]);
    i++;
}
console.log(teks2);