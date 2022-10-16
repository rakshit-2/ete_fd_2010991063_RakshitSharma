const express=require('express');
const app=express();
const dotenv=require("dotenv");
const mysql=require("mysql");
const bodyParser=require('body-parser');
const cors=require('cors');


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config();


const db_host=process.env.HOST;
const db_user=process.env.USER;
const db_pass=process.env.PASSWORD;
const db_database=process.env.DATABASE;

const db=mysql.createPool({
    host:db_host,
    user:db_user,
    password:db_pass,
    database:db_database,
});





app.get("/",(req,res)=>{
    res.send("hello api..!!");
});

app.post("/signup/insert-data",(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    var pass=req.body.pass;
    var check=req.body.check;
    var postAll="";
    if(check==="buyer"){
        var postAll="insert into profile(fname,lname,email,pass,buyer) values(?,?,?,?,?);"
        
    }
    else
    {
        var postAll="insert into profile(fname,lname,email,pass,dealer) values(?,?,?,?,?);"
    }
    db.query(postAll,[fname,lname,email,pass,1],(err,result)=>{
        res.send(result);
    }) 
})


app.get("/login/check-data",(req,res)=>{
    var email=req.query.email;
    var pass=req.query.pass;
    var check=req.query.check;
    var postAll="";
    if(check==="buyer")
    {
        var postAll="select * from profile where email=? and pass=? and buyer=?;"
    }
    else
    {
        var postAll="select * from profile where email=? and pass=? and dealer=?;"
    }
    db.query(postAll,[email,pass,1],(err,result)=>{
        res.send(result);
    })
})



app.get("/profile/get-data",(req,res)=>{
    var email=req.query.email;
    var postAll="select * from profile where email=?;"
    db.query(postAll,[email],(err,result)=>{
        res.send(result);
    })
})


app.post("/profile/insert-data",(req,res)=>{
    var email=req.body.email;
    var income=req.body.income;
    var address=req.body.address;
    var contact=req.body.contact;
    var occ=req.body.occ;
    console.log(email)
    var postAll="UPDATE profile SET income = ?, address = ?, contact=?, occupation=?, updated=? WHERE email=?;"
    db.query(postAll,[income,address,contact,occ,1,email],(err,result)=>{
        res.send(result);
    })
})



const port=process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`listning on port ${port}`);
});
