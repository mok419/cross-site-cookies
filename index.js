// var cors = require('cors')
const app = require("express")()

// var allowlist = ['https://express-cross-site-cookie.onrender.com', 'https://mok419.github.io', 'http://localhost:3000']
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (allowlist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true, credentials: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }

app.post("/", (req,res) =>{

    const cookie = req.headers.cookie;
    if (cookie)
        res.sendFile(`${__dirname}/cookie.png`)
    else{
        res.sendStatus(403);
        res.end();
    }
})
app.post("/login", (req, res) => {
    //const cookie = "user=hussein; samesite=strict; secure";
    //const cookie = "user=hussein; samesite=lax; secure";
    const cookie = "user=hussein; samesite=none; secure"; //domain=express-cross-site-cookie.onrender.com;
    //const cookie = "user=hussein;";

    res.setHeader("set-cookie", [cookie])
    res.send("ok")
})


app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

// app.get("/img", cors(corsOptionsDelegate), (req, res) => {
app.get("/img", (req, res) => {
    const cookie = req.headers.cookie;
    if (cookie)
        res.sendFile(`${__dirname}/cookie.png`)
    else{
        res.sendStatus(403);
        res.end();
    }
})
  
app.listen(8080, ()=>console.log("listening on port 8080"))
