const https = require("http");

const mongodb = require("mongodb");

const connectionString = "mongodb+srv://muhammadjon:998915956030@cluster0.xyi2r.mongodb.net/Rejaa?retryWrites=true&w=majority&appName=Cluster0";


mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MongoDB Connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = https.createServer(app);
      let PORT = 5011;
      server.listen(PORT, function () {
        console.log(`The server is running successfully on port ${PORT},
http://localhost:${PORT}`);
      });
    }
  }
);