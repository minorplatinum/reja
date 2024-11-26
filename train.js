
//console.log('train task ishga tushdi!');

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "uzingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bo'lgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling foydasi yoq", //60
// ];

//callback
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert Number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) return null, list[1];
//   else if (a > 30 && a <= 40) return null, list[2];
//   else if (a > 40 && a <= 50) return null, list[3];
//   else if (a > 50 && a <= 60) return null, list[4];
//   else {
//     setInterval(function () {
//       callback(null , list[5]);
//     }, 1000);
//   }
// }

// console.log('passed 0')

// maslahatBering(70, (err, data) => {
//   if(err) console.log('Error:' , err);
//   else {
//     console.log(data);
//   }
// });

// console.log('passed 1')

//async functions
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return null, list[0];
//   else if (a > 20 && a <= 30) return null, list[1];
//   else if (a > 30 && a <= 40) return null, list[2];
//   else if (a > 40 && a <= 50) return null, list[3];
//   else if (a > 50 && a <= 60) return null, list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 3000);
//     });

// setTimeout(function () {
//   return null, list[5];
// }, 3000);
//   }
// }

// console.log("Passed here 0");

// using try & catch

// maslahatBering(44)
//   .then((data) => {
//     console.log("javob:", data);
//   })

//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");

// using await

// async function run() {
//   let javob = await maslahatBering(6);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();



        
     //  A-TASK 

    /*Shunday 2 parametrli function tuzing,
    hamda birinchi parametrdagi letterni 
    ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
     MASALAN countLetter("e", "engineer") 3ni return qiladi. */



     /*function countLetter(letter, names) {
    let count = 0;
    for (let char of names) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}

// Bolalardi ismlari
let students = "Ali, Vali,Samandar, Emil";

// "a" harfi necha marta qatnashganini saneymiz
console.log(countLetter("a", students)); // Output: 3*/


 //B - TASK 

/*function countDigits(s) {
    return s.split('').filter(char => !isNaN(char) && char !== ' ').length;
}

// Misol uchun
const result = countDigits("ad2a54y79wet0sfgb9");
console.log(result); // javob: 7*/

class Shop {
    constructor(non, lagmon, cola) {
        this.products = {
            non,
            lagmon,
            cola
        };
    }

    getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    qoldiq() {
        const time = this.getCurrentTime();
        return `Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
    }

    sotish(mahsulot, soni) {
        if (this.products[mahsulot] === undefined) {
            return `Bunday mahsulot mavjud emas!`;
        }

        if (this.products[mahsulot] < soni) {
            return `Hozirda ${mahsulot} yetarli emas! Faqat ${this.products[mahsulot]}ta mavjud.`;
        }

        this.products[mahsulot] -= soni;
        const time = this.getCurrentTime();
        console.log(`Hozir ${time}da ${mahsulot}dan ${soni}ta sotildi.`);
    }

    qabul(mahsulot, soni) {
        if (this.products[mahsulot] === undefined) {
            return `Bunday mahsulot mavjud emas!`;
        }

        this.products[mahsulot] += soni;
        const time = this.getCurrentTime();
        console.log(`Hozir ${time}da ${mahsulot}dan ${soni}ta qabul qilindi.`);
    }
}

// Misol:
const shop = new Shop(4, 5, 2);

console.log(shop.qoldiq()); // Qoldiqni ko'rsatadi
shop.sotish('non', 3);      // 3 ta non sotildi
shop.qabul('cola', 4);      // 4 ta cola qabul qilindi
console.log(shop.qoldiq()); // Yangilangan qoldiqni ko'rsatadi
