const mongoose = require('mongoose');
let dummy=require("./models/chat.js");


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

dummy.insertMany([
    {
    profile:"https://plus.unsplash.com/premium_photo-1669138512601-e3f00b684edc?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    from:"Rahul kumar",
     to:"Manish kumar",
     msg:"all is well",
     img:"https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    created_at: new Date()
     },
     {
        profile:"https://images.unsplash.com/photo-1661436170168-7ce82d649532?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        from:"Chhoti kumari",
         to:"Ramkali kumari",
         msg:"what are you doing now dear",
         img:"https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        created_at: new Date()
         },
         {
            profile:"https://plus.unsplash.com/premium_photo-1682089897177-4dbc85aa672f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            from:"Balwant kumar",
             to:"Ankit kumar",
             msg:"kya sir kya kar rhe hai",
             img:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            created_at: new Date()
        }

]).then((res)=>
{
    console.log(res);
}).catch((err)=>
{
    console.log(err);
})

