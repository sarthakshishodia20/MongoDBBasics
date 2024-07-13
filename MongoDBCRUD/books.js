const mongoose = require('mongoose');

main().then(()=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String,
    }
    ,
    price:{
        type:Number,
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["friction","non- fiction"],
    }
});

const Book=mongoose.model("Book",bookSchema);


// let book1=new Book({
//     title:"Bhoomi Gupta",
//     author:"Harper Bee",
//     price:"399",
// })
// book1.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


Book.findByIdAndUpdate("669257a19ab281aa43cd6682",{price:-500}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})