const express = require('express')
const app = express();

// app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    console.log("root router")
    // res.status(500).send("hello world ...")
    // res.status(200).json({name:"tenzin"})
    // res.download('./express.js')
    // res.render('index',{name: "Diyang !!!"})
    res.send('hellow')
})

// const userRouter = require('./routes/users')
// //const postRouter = require('./routes/users')

// app.use('/users',userRouter)
// // app.use('/posts',postRouter)

const myRouter = require('./routes/users')

app.listen(3001)