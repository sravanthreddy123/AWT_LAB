const http = require('http')
const fs = require('fs')
const url = require('url')
let result;
function write(result) {
    fs.writeFile("Student.json",JSON.stringify(result),function(err){
        console.log(err);
    });
}
const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.write("<h1>Welcome to the student data web page</h1>");
        res.end();
    }
    if(req.url == '/stddata' && req.method == 'GET'){
        fs.readFile("Student.json", function(err,data){
            res.end(data);
        });
        // method2 get the data from JSON file
        // fs.readFile("Student.json", fuction(err, data){
        //      result = JSON.parse(data);
        //      for(i in result){
        //          res.write("<br>Dtudent ID:" + result[i]['id]);
        //          res.write("<br>Name:" + result[i]['name']);
        //          res.write("<br>Department:" + result[i]['branch']);
        //      }
        //      res.end();
        //});
    }
    if(req.method == "POST"){
        const newstd = url.parse(req.url, true).query;
        console.log(newstd);
        fs.readFile("Student.json",function(err,data){
            result = JSON.parse(data);
            let index = result.length
            result[index] = newstd;
            console.log(result);
            write(result);
            res.write("<h1>Student data inserted</h1>");
            res.end();
        });
    }

    if (req.method == "PUT") {
        const upstd = url.parse(req.url, true).query;
        fs.readFile("Student.json", function(err, data){
            result = JSON.parse(data);
            for (i in result) {
                if (upstd['id'] == result[i]['id']) {
                    result[i]['id'] == upstd['id'];
                    result[i]['name'] == upstd['name'];
                    result[i]['branch'] == upstd['branch'];
                    write(result);
                    res.write("<h1>Student details were updated</h1>");
                    res.end();
                }
            }
        });
    }
    if (req.method == "DELETE") {
        const delstd = url.parse(req.url, true).query;
        fs.readFile("Student.json", function (err, data) {
            result = JSON.parse(data);
            for(i in result){
                if (delstd['id'] == result[i]['id']) {
                    result.splice(i, 1);
                    write(result);
                    res.write("<h1>Stufent record id Deleted</h1>");
                    res.end();
                }
            }
        });

    }
});
server.listen(1144, () => {
    console.log("Server started......");
})

