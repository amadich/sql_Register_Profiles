const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = 3001;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "admin",
    database: 'login_ff'
})

app.post("/profiles", (req,res) => {
    const email = req.body.email;
    const user = req.body.user;
    const pwd = req.body.pwd;

    db.query(
        "INSERT INTO accunets (email,user,password,date) VALUES (?,?,?,now())",
        [email,user,pwd],
        (err) => {
            if(err) {console.log(err);}
            else {res.send("Welcome Back")}
        }
    )

})

app.listen(PORT, () => {
    console.log('welcome Back This Port ',PORT);
})
