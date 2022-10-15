var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;
var connectionString = "mongodb://localhost:27017";
var app = express();
//var bcrypt=require("bcryptjs")
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
//var jwt = require('jsonwebtoken');
app.use(express.json());
app.get("/getusers", (req, res)=>{
    mongoClient.connect(connectionString,(err, clientObj)=>{
        if(!err){
            var database = clientObj.db("reactdb");
            database.collection("tblusers").find({}).toArray((err, documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});

app.post("/registerusers", async (req,res)=>{
           //bcrypt.hash(req.body.Password,10,function(hash){
            var details={
                Name:req.body.Name,
                Password:hash
            }
    
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){  
                clientObj.db("reactdb").collection("tblusers").insertOne(details,()=>{
                console.log("data inserted successfully")
                //jwt.sign({_id: details._id }, 'avijibfebcjdbcjkdshckdcmdsckdfjnkkkdfnkn', { algorithm: 'RS256' }, function(err, token) {
                //return console.log(token);
                 //});
            })
        }
    })
})

//})
;
app.get("/getproducts", (req, res)=> {

    mongoClient.connect(connectionString, (err, clientObj)=> {
        if(!err) {
            var database = clientObj.db("reactdb");
            database.collection("tblproducts").find({}).toArray((err,documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});
app.get("/getcategories", (req, res)=> {

    mongoClient.connect(connectionString, (err, clientObj)=> {
        if(!err) {
            var database = clientObj.db("reactdb");
            database.collection("tblcategories").find({}).toArray((err,documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});

app.get("/products/:id",(req,res)=>{
    let ReceivedId=parseInt(req.params.id)
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
            clientObj.db("reactdb").collection("tblproducts").find({id:ReceivedId}).toArray((err,documents)=>{
                if(!err){
                    res.send(documents)
                }
            })
        }
    })
})
app.get("/:category",(req,res)=>{
    let cat=req.params.category
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
            clientObj.db("reactdb").collection("tblproducts").find({category:cat}).toArray((err,documents)=>{
                if(!err){
                    res.send(documents)
                }
            })
        }
    })
})
app.listen(4000);
console.log("Server Started : http://127.0.0.1:4000")
