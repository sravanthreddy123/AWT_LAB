var express=require('express')
var app=express();
var fs=require('fs')
app.use(express.json())
app.get('/staff',function(req,res){
    fs.readFile('faculty.json',function(err,data){
        res.send(data)
    })
})
app.get('/staff1',(req,res) =>{
    let myrf=fs.createReadStream(_dirname+"/hello.html",'utf8')
    myrf.pipe(res);

})
app.post('/addstf',(req,res)=>{
    console.log(req.body)
    const newstf={
        name:req.body.name,
        id:req.body.id,
        loc:req.body.loc,
    }
    fs.readFile('faculty.json',function(err,data){
        var sdata=JSON.parse(data);
        sdata.push(newstf);
        fs.writeFile('faculty.json',JSON.stringify(sdata),function(err,data){
            console.log("data inserted");
        })
    })
    res.send("faculty data inserted")
});
app.put('/updatestaff/:id',(req,res)=>{
    var id=req.body.id;
    fs.readFile('faculty.json',function(err,data){
        var sdata=JSON.parse(data);
        for(let i in sdata){
            if(id===sdata[i]['id']){
                sdata[i]['id']=req.body.id;
                sdata[i]['Name']=req.body.name;
                sdata[i]['loc']=req.body.loc;
                fs.writeFile('faculty.json',JSON.stringify(sdata),function(err,data){
                    console.log("data updated");
                })
            }
        }
        res.send("staff data updated");
    })
  
})
app.delete('/deletestaff/:id',(req,res)=>{
    var id=req.body.id;
    fs.readfile('faculty.JSON',function(err,data){
        var sdata=JSON.parse(data);
        for(let i in sdata){
            if(id===sdata[i]['id']){
                sdata.splice(i,1);
                fs.writefile('faculty.JSON',JSON.stringify(sdata),function(err,data){
                    console.log("data deleted");
                })

            }
        }
        res.send("staff data deleted");
    })
})
app.listen(1245,function(){
    console.log("Server Started........")
})