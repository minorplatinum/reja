console.log("Hello, Dcoder!");
console.log("Web Serverni boshlash");

const express = require("express");  // Express kutubxonasini chaqirish
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});



app.use(express.static("public"));  // Statik fayllarni "public" papkasidan yuklash
app.use(express.json());  // JSON formatidagi ma'lumotlarni ishlash
app.use(express.urlencoded({ extended: true }));  // URL-kodlangan ma'lumotlarni olish

// Views (ko'rinish) sozlamalari
app.set("views", "views");  // Ko'rinishlarni "views" papkasidan olish
app.set("view engine", "ejs");  // EJS templating engine ishlatish

// Routing (yo'naltirish)
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get('/author' , (req, res) => {
  res.render("author",{ user: user});
});


app.get("/", function (req, res) {
  res.render("harid");  // "/gift" manzili uchun javob
});


// Serverni ishga tushirish
const server = http.createServer(app);  // Server yaratish
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server muvaffaqiyatli ishga tushdi, port: ${PORT}`);  // Server ishlayotganini konsolga chiqarish
});