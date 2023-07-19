// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("User Names");
// });

// router.get("/new", (req, res) => {
//   res.send("User New Form");
// });

// router.get("/data", (req, res) => {
//   res.send("User Emails");
// });

// router.post("/", (req, res) => {
//   res.send("Create User");
// });

// router
//   .route("/:id")
//   .get((req, res) => {
//     // req.params.id
//     console.log(req.student);
//     res.send(`Get User With ID ${req.params.id}`);
//     // res.send(`id : ${req.params.id}`)
//   })
//   .put((req, res) => {
//     res.send("Update User With ID $(req.params.id}");
//   })
//   .delete((req, res) => {
//     // req.params.id
//     res.send("Delete User With ID $(req.params.id}");
//   });

// const users = [{ name: "Diyang" }, { name: "Tsesang" }];
// router.param("id", (req, res, next, id) => {
//   // console.log(id)
//   req.student = users[id];
//   next();
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

// router.use(logger);

router.get('/new',(req,res)=>{
    res.render("index",{name:"tenzin"});
})

router.get('/:id',(req,res)=>{
    res.send("student get method rooot route ...")
})

// router.use(logger);

router.get('/',(req,res)=>{
    console.log(req.query.name)
    res.send('hi')
})

router.post('/',(req,res)=>{
    console.log(req.query.name)
    let isValid = false ;
    if(isValid){
        users.push({name:req.body.name,email:req.body.email,subject:req.body.subject});
        res.redirect(`/student/common/${users.length-1}`)   // localhost:student/common/2
    }
    else{
        console.log('tsesang is ultra noob ... error here ..... ')
        res.render("index",{name:"tenzin",email:"tenzin@gmail.com",subject:"tibetan"})
    }
})

// router.get('/name',(req,res)=>{
//     // console.log(req.query.name)
//     res.send('another get mthetd .... ')
// })




const users=[{name:'Tsesong'},{name : 'Diyang'}]

router.route('/common/:id')
.get((req,res)=>{
    res.send(req.user);
})
.put((req,res)=>{
    res.send("put method here .... ")
})

router.param('id',(req,res,next,id)=>{
    req.user=users[id];
    console.log("i will be printed if matching matching  .... ")
    next();
})

function logger(req,res,next){
    console.log('logger middleware .... ')
    next();
}

module.exports=router;

