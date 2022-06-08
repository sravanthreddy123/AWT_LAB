var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
    if(req.url=='/'){
        fs.readFile('1245text.txt', function (err, data) {
            res.write(data);
            res.end();
        })
    }
    if(req.url=='/SravanthReddy'){
        res.write("This is using endpoint SravanthReddy");
        res.end();
    }
})
server.listen(1245,function(err,data){
    console.log("Server Started");
});
//process.env.PORT
//Gets the free system port number
