console.log("Merhaba Kodlama.io");

//JS is not type safe 

let dolarDun = 9.20;

let dolarBugun = 9.30;

{
    let dolarDun = 9.10;
}

console.log(dolarDun)//konsolda 9.20 yazacak

const euroDun = 11.2;
//euroDun = 11; hataya bu sebep olduğu için yorum satırına aldık

console.log(euroDun);//Hata verecek çünkü euroDun türünü const belirlememize rağmen değiştirmeye çalıştık.

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredileri"];

console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>");
    
}
console.log("</ul>")