console.log("Hello, Dcoder!");
console.log("Web Serverni boshlash");

const express = require("express");  // Express kutubxonasini chaqirish
const app = express();
const http = require("http");

app.use(express.static("public"));  // Statik fayllarni "public" papkasidan yuklash
app.use(express.json());  // JSON formatidagi ma'lumotlarni ishlash
app.use(express.urlencoded({ extended: true }));  // URL-kodlangan ma'lumotlarni olish

// Views (ko'rinish) sozlamalari
app.set("views", "views");  // Ko'rinishlarni "views" papkasidan olish
app.set("view engine", "ejs");  // EJS templating engine ishlatish

// Routing (yo'naltirish)
app.get("/olma", function (req, res) {
  res.send("<h1>Mana sanga olam olam olmaaaa~</h1>");  // "/hello" manzili uchun javob
});

app.get("/banan", function (req, res) {
  res.send("<h1>sizga banan sovg'a qildik. Olurasiz~</h1>");  // "/gift" manzili uchun javob
});


// Serverni ishga tushirish
const server = http.createServer(app);  // Server yaratish
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server muvaffaqiyatli ishga tushdi, port: ${PORT}`);  // Server ishlayotganini konsolga chiqarish
});