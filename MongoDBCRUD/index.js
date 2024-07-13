const mongoose = require('mongoose');

main().then(()=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);
// const Employee=mongoose.model("Employee",userSchema);

// const user1=new User({
//     name:"Adam",
//     email:"Adam@gmail.com",
//     age:19,
// });
// user1.save();
// const user2=new User({
//     name:"Bdam",
//     email:"Bdam@gmail.com",
//     age:29,
// });
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// User.insertMany([
//     {name:"tony",
//         email:"tony@gmail.com",
//         age:20,
//     },
//     {name:"Bruce",
//         email:"Bruce@gmail.com",
//         age:10,
//     },
//     {name:"Eve",
//         email:"Eve@gmail.com",
//         age:29,
//     }
// ]).then((res)=>{
//     console.log(res);
// });

// User.find().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });


// User.find({age:{$gte:27}}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// User.findOne({age:{$gte:20}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// User.findById({_id:"6692141b26e4c20dac46547d"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// User.findById("6692141b26e4c20dac46547d").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.updateOne({name:"Bdam"},{age:201}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// User.findById("6692141b26e4c20dac46547d").then((res)=>{
//     console.log(res);
// })



// User.findOneAndUpdate({age:{$gt:20}},{age:92},{new:true}).then((res)=>{
//     console.log(res);
// })

// User.deleteOne({name:"Bruce"}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.deleteMany({age:48}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

User.findByIdAndDelete("669214f637130731fdfeb9a8").then((res)=>{
    console.log(res);
})