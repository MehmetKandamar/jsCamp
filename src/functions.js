function addToCard(quantity, productName = "Elma") {
    console.log("Sepete eklendi : ürün :"+ productName+ " adet : " + quantity )
    
}

//addToCard()--> Bu kod çalışır ve "Sepete eklendi : undefined" şeklinde çıktı verecek Undefined, Null ile aynı şey değildir.
addToCard(5)
//addToCard(12)

console.log("-------------------------------------------------------------------------------------------------"); 

let sayHello = ()=>{
    console.log("Hello World")
}

sayHello()

console.log("-------------------------------------------------------------------------------------------------"); 

let sayHello2 = function () {
    console.log("Hello World 2");
}

sayHello2()

console.log("-------------------------------------------------------------------------------------------------"); 

function addToCard2(productName, unitPrice, quantity) {
    console.log("Sepete eklendi : " + productName + " Ürün Fiyatı : " + unitPrice+ " Adet : "+ quantity); 
    
}

addToCard2("Elma", 5, 10)
addToCard2("Armut", 2, 20)

console.log("-------------------------------------------------------------------------------------------------"); 

let product1 = {productName : "Elma" , unitPrice : 5, quantity : 4} //Bu bizim objemiz ve genellikle bunu databaseden çekeriz.

function addToCard3(product){

console.log("Sepete eklendi : " + product.productName + " Ürün Fiyatı : " + product.unitPrice+ " Adet : "+ product.quantity);
}

addToCard3(product1)

console.log("-------------------------------------------------------------------------------------------------"); 

function addToCard4(x) {
    console.log(products);
}

let products = [
    {productName : "Soğan" , unitPrice : 4, quantity : 4},
    {productName : "Karpuz" , unitPrice : 10, quantity : 12},
    {productName : "Ekmek" , unitPrice : 2, quantity : 4}
]

addToCard4(products)

console.log("-------------------------------------------------------------------------------------------------"); 

function add(bisey, ...numbers) {//Rest
    let total =0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
        
    }
    console.log(total);
    console.log(bisey);
    
}

add(12, 36, 4)
add(20, 31, 56)
add(20, 42, 86, 125, 156)

console.log("-------------------------------------------------------------------------------------------------"); 


let numbers = [30, 10, 500, 600, 120]
console.log(numbers);// Çıktısı [30, 10, 500, 600, 120] şeklindedir.
console.log(...numbers); // Çıktısı 30, 10, 500, 600, 120  şeklimdedir.
//console.log(Math.max(numbers)); --> Bunun çıktısı NaN'dır çünkü içindeki değerleri değil Arrayı görüyor aslında SPREAD ile açıp içini görmesi lazım ki biz bunu alttakı örnekte görüyoruz
console.log(Math.max(...numbers));

console.log("-------------------------------------------------------------------------------------------------"); 

//Array kullanımı
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name: "İç Anadolu", population : "10M"},
    {name: "Marmara", population : "27M"},
    {name: "Karadeniz", population : "12M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Kocaeli"],
        ["Sinop", "Trabzon"]
    ]
]

console.log(icAnadolu.name);
console.log(icAnadolu.population);
console.log(karadenizSehirleri);

console.log("-------------------------------------------------------------------------------------------------"); 

//Object kullanımı

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);

