const express =require("express")

const {sequelize,user,Post}=require('./models')

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
    return res.status(400).json(err)
}

})
app.get('/users',async(req,res)=>{
    try {const User=await user.findAll()
        return res.json(users)
    }
    catch (err){
        console.log(err)
        return res.status(400).json("error : Something went Wrong!")
    }
})
app.get('/users/:uuid',async(req,res)=>{
    const uuid=req.params.uuid
    try {const user=await user.findOne(
        {
            where:{uuid},
            include:'posts'
        }
    )
        return res.json(user)
    }
    catch (err){
        console.log(err)
        return res.status(400).json("error : Something went Wrong")
    }
   
})
app.delete('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
      const User = await user.findOne({ where: { uuid } })
  
      await User.destroy()
  
      return res.json({ message: 'User deleted!' })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  app.put('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    const { name, email, role } = req.body
    try {
      const User = await user.findOne({ where: { uuid } })
  
      User.name = name
      User.email = email
      User.role = role
  
      await user.save()
  
      return res.json(User)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
app.post('/posts',async(req,res)=> {
    const {userUuid,body}=req.body

try{  
    const User=await user.findOne({where :{uuid:userUuid}})
    const post=await Post.create({body,userId :User.id })
    return res.json(post)
  }catch(err){
    console.log(err)
    return res.status(400).json(err)
  }


})
app.get('/posts',async(req,res)=> {


try{  
    const posts= await Post.findAll({include :'user'})
    return res.json(posts)
  }catch(err){
    console.log(err)
    return res.status(400).json(err)
  } 


})



app.listen({port:5000},async()=>{
console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
console.log('Database connected!')})