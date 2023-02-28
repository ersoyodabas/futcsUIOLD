
 
var user_list = [
    {
        name : "ersoyabi",
        email : "abc.gmail.com",
        phone : "05555555",
        last_login_date : "22.02.2023"
    },
    {
          name : "cuneyt",
          email : "cba.gmail.com",
          phone : "05331247847",
          last_login_date : "22.02.2022"
    
    }
]
function  test(){
    
var x = document.getElementsByClassName("content-page")[0];
x.append('merhaba ege');  
}



var meyveler = ["Elma", "Armut", "muz"];
console.log(meyveler);




var dizi1 = new Array();
var dizi2 = new Array(3);
console.log(dizi1.length);
console.log(dizi2.length);




var dizi1 = new Array();
dizi1[0] = 10;
dizi1[1] = 20;
dizi1[2] = "Veri Türü";
dizi1[3] = 40;

 var dizi2 = new Array(3);
 dizi2[0] = "a";

 dizi2[1] = "b";
 dizi2[2] = 2;
 dizi2[3]="yeni"


 var dizi = [10, 20, 30, 40, 50, 60, 70, 80];
 for (var i = 0; i < dizi.length; i++) {
    console.log(dizi[i]);
 }

 var dizi = [10, 20, 30, 40, 50, 60, 70, 80];
 for (var i in dizi) {
    console.log(dizi[i]);
 }

 var dizi = [];
 for (var i = 0,j=i; i < 10; i++) {
    dizi[i] = ++j;
 }
 console.log(dizi)



var rnd //rnd değişkeni bu satırda undefined değerini alır
for (var i = 0; i <dizi.length;) {
rnd = Math.round(Math.round()*"19+1");
for (var j = 0; j < dizi.length; j++) {
    if (dizi[j] ===rnd) {
        break;
    }
    if (j === dizi.length - 1) {
        dizi[1] = rnd;
        i++;
    }
}
}