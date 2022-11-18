const mysql = require("mysql");
const http = require("http");
const fs = require("fs");


// cretae connection 

let connection = mysql.createConnection({
    // port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "user"
})

//connet 

connection.connect((err) => {
    if (err)
        console.log(err);
    else
        console.log("Connected")
})


//http server

//first page

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err)
                throw err;
            else {
                res.write(data);
                res.end();
            }
        });
    }


    //signin page

    if (req.url === "/signin") {
        if (req.method === "GET") {
            fs.readFile("./signin.html", (err, data) => {
                if (err)
                    throw err;
                else {
                    res.write(data);
                    res.end();
                }
            });
        }
//submit

        if (req.method === "POST") {
            let body = "";
            req.on('data', function (chunk) {
                body += chunk;
            });
            req.on('end', function () {
                let qs = new URLSearchParams(body);
                let uid = qs.get("email");
                let pwd = qs.get("pwd");
                connection.query("select * from users where email=? and password=?", [uid, pwd], function (err, result, fields) {
                    if (result.length == 1) {
                        res.writeHead(200);
                        res.write(result[0].name);
                    }
                    else {
                        res.writeHead(400);
                    }
                    res.end();
                });
            });
        }
    }


    //third page 

    if (req.url === "/signup") {
        if (req.method === "GET") {
            fs.readFile("./signup.html", (err, data) => {
                if (err)
                    throw err;
                else {
                    res.write(data);
                    res.end();
                }
            });
        }

        if (req.method === "POST") {

            let body = "";
            req.on('data', function (chunk) {
                body += chunk;
            });
            req.on('end', function () {
                let qs = new URLSearchParams(body);
                let name = qs.get("name");
                let uid = qs.get("email");
                let pwd = qs.get("pwd");
                connection.query("select * from users where email=?", [uid], function (err, result, fields) {
                    if (err) {
                        res.writeHead(400);
                    }
                    else if (result.length == 1) {
                        res.writeHead(250);
                        res.write("User Already Exists");
                    }
                    else {
                        connection.query(`insert into users values("${name}","${uid}","${pwd}")`, function (err, result, fields) {
                            if (err)
                                if (err.code == "ER_DUP_ENTRY")
                                    res.writeHead(250);
                                else
                                    res.writeHead(200);
                            res.end();
                        });
                    }
                    res.end();
                });
            });
        }
    }


    //thhird page end
});

server.listen(1000, (err) => {
    if (err)
        throw err;
    console.log("Server Listening at 3000");
})
