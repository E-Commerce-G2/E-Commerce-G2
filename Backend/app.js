const express =require("express")

const {sequelize,user}=require('./models')

const app=express()
app.use(express.json())
app.post('/users',async (req,res)=>{
const{name,email,role}=req.body
try {

   const User=await user.create({name,email,role})
   return res.json(User)
}
catch(err){
    console.log(err)
    return res.status(500).json(err)
}

})
app.get('/users',async(req,res)=>{
    try {const User=await user.findAll()
        return res.json(User)
    }
    catch (err){
        console.log(err)
        return res.status(500).json("error : Something went Wrong!")
    }
})
app.get('/users/:uuid',async(req,res)=>{
    const uuid=req.params.uuid
    try {const user=await user.findOne(
        {
            where:{uuid}
        }
    )
        return res.json(user)
    }
    catch (err){
        console.log(err)
        return res.status(500).json("error : Something went Wrong!")
    }
})
app.listen({port:5000},async()=>{
console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
console.log('Database connected!')})