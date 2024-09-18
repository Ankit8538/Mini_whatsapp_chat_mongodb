const express = require('express');
const app = express();
let port=8080;
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const path=require("path");
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const curdop=require("./models/chat.js");
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/curdoperation');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
 main().then(function(res)
{
   console.log("mongoose connected to the javascript");
}).catch(function(err)
{
   console.log(err);
})

app.get("/allchat",async(req,res)=>
{
   let rec=await curdop.find();
   res.render("index.ejs",{rowdata:rec})
   
})
app.get("/new",(req,res)=>
{
   res.render("newchat.ejs");
})
app.post("/post",(req,res)=>
{
    console.log(req.body);
    let {profile,sender,message,image,recevier}=req.body
    let newdata=new curdop({
          profile:profile,
          from:sender,
          msg:message,
          img:image,
          to:recevier,
          created_at:new Date()
    })
    newdata.save().then((res)=>
    {
        console.log(res);
    }).catch((err)=>
    {
        console.log(err);
    })
     
    res.redirect("/allchat");
})

app.get("/edit/:_id",async(req,res)=>
{
    console.log(req.params);
    let {_id}=req.params;
   let edits= await curdop.findById(_id);
   
    res.render("edit.ejs",{edits});
})
   app.patch("/update/:id",(req,res)=>
   {
     let {content}=req.body;
     let {id}=req.params;
     console.log(id);
     console.log(content);
     curdop.findByIdAndUpdate(id,{msg:content},{new:true}).then((res)=>
   {
      console.log(res);
   }).catch((err)=>
   {
     console.log(err);
   })
      res.redirect("/allchat");
   })
   app.delete("/post/:id",(req,res)=>
   {
      let {id}=req.params
      console.log(id);
      curdop.findByIdAndDelete(id,{new:true}).then((res)=>
      {
         console.log(res);
      }).catch((err)=>
      {
         console.log(err);
      })
      res.redirect("/allchat")
   })
   app.get("/editimg/:id",async(req,res)=>
   {
      let{id}=req.params
      let imgdata= await curdop.findById(id);
      console.log(imgdata);
      res.render("editimage.ejs",{imgdata})
   })

   app.post("/update/:id",(req,res)=>
   {
      let {id}=req.params;
      let {change}=req.body;
      console.log(change);
      console.log(id);
      curdop.findByIdAndUpdate(id,{img:change},{new:true}).then((res)=>
      {
         console.log(res);
      }).catch((err)=>
      {
         conaole.log("err")
      })
      res.redirect("/allchat");
   }   
   );
   app.post("/delete/:id",async(req,res)=>
   {
      let {id}=req.params;
      let op= await curdop.findOneAndUpdate({_id:id},{msg:""},{new:true});
      console.log(op);
      res.redirect("/allchat");

   })



app.listen(port,()=>
{
    console.log("My server is open 8080");
})
