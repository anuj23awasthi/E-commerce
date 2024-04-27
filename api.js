//express, body-parser,cors
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



const users = [
    { uname: "abhi", pass: "abhi@gla" },
    { uname: "anuj", pass: "anuj@gla" },
    { uname: "aditya", pass: "aditya@gla" },
    { uname: "cheTan", pass: "chetan@123" },
    { uname: "dhiraj", pass: "dhir@12" },
    { uname: "Ela", pass: "ela@123" },

]



app.get("/", (req, res) => {
    res.send(users);


})

app.post('./Login.js', (req, res) => {
    const data = req.body;
    console.log(item.uname, item.pass)
    if (data.uname ==iteam.uname  && data.pass ==iteam.uname ) {
        res.send(users);
        alert("login successfully")
    }
    else {
        res.send("Invalid Username or Password");
    }


})

app.post("/login", (req, res) => {
    const data = req.body;
    var arr = users.filter((iteam, index) => {
        return (
            iteam.uname == data.uname &&
            iteam.pass == data.pass
        )
    })
    if (arr.length > 0) {
        res.send({
            status: "success",
            data: arr

        })
    }
    else {
        res.send({
            status: "error",
            data: "Invalid email or password"
        })
    }
})
app.post("/register", (req, res) => {
    const data = req.body;
    var arr = users.filter((iteam, index) => {
        return (
            iteam.uname == data.uname &&
            iteam.email == data.email &&
            iteam.pass == data.pass
        )
    })
    if (arr.length > 0) {
        res.send({
            status: "error",
            data: "Email already exist"
        })
    }
    else {
        users.push(data)
        res.send({
            status: "success",
            data: "User Registered Successfully"
        })
    }
})


app.listen(5000, () => {
    console.log("Backend running at port 5000")
})
