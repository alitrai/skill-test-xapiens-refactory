var data = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3]

let bagi = (n, data) => {
    let hasil = [];
    for (i = 0; i < data.length; i += n) hasil.push(data.slice(i, i + n));
    return hasil;
  };

var hasilBagi=bagi((data.length/3), data)
var i;

for (i = 0; i < 3;) {
  var n=i+1;
  var urutan= hasilBagi[i].sort(function(a, b){return b - a});
  var sort= "Nilai grup " + n + " dari yang terbesar ke terkecil adalah " + urutan;
  i++;
  console.log(sort);
}

for (i = 0; i < 3;){
  var n=i+1;
  var jumlah=hasilBagi[i].reduce(function(a, b){
    return a + b;
  }, 0);
  var total="Total grup " + n + " adalah " + jumlah;
  i++;
  console.log(total);
}

for (i = 0; i < 3;) {
  var n=i+1;
  var jumlah = hasilBagi[i].reduce(function(a, b){
    return a + b;
  }, 0);
  var rerata = jumlah/hasilBagi[i].length;
  var rataRata = "Rata-rata grup " + n + " adalah " + rerata;
  i++;
  console.log(rataRata);
}

for (i = 0; i < 3;) {
  var n=i+1;
  var tertinggi= Math.max.apply(Math, hasilBagi[i]);
  var terendah=Math.min.apply(Math, hasilBagi[i]);  
  var max = "Nilai tertinggi grup " + n + " adalah "+ tertinggi ;
  var min = "Nilai terendah grup " + n + " adalah "+ terendah ;
  i++;  
  console.log(max);
  console.log(min);
  }