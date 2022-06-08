    var fs = require('fs')
    fs.readFile('1245text.txt',function(err,data){
        console.log(data.toString());
       // console.log("File opened");

    })
    fs.writeFile('1245_text.txt',"Nice to meet you",function(err,data){
        console.log("Data Inserted");
    })
    fs.appendFile('1245_text.txt'," This is appended line",function(err,data){
        console.log("Data appended");
    })

