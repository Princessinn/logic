
const fs = require('fs');

const {pool,s_users,insertUser_query} = require('../model/getPool')
const homefun = (req, res) => {
    res.send("Home Page");
}

const list = (req, res) => {
    res.send("list page");
}

const createUser =  async(req, res) => {
    const userDetails = {
        fullname: req.body.fullname,
        contact: req.body.contact,
        username: req.body.username,
        email: req.body.email,
    }
  res.send(req.body.fullname);
console.log(req.body.username)

//     const rest = await addUser(userDetails)
// try{
//     res.status(200).json(rest)
// }catch(err)
// {
//     err
// } 


  

}








const showUsers=(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err){
            res.send("error connecting to database")
            console.log(err);
            return;
        }
    connection.query(s_users,(err,result)=>{
        connection.release();
        if(err) throw err;
        res.json(result);
    })
    })  
}
let  rs = 0;
const addUser = async(data)=>{
    pool.getConnection((err,connection)=>{
        if (err) {
           return err
        } 
        connection.query(insertUser_query,[data.username,data.fullname,data.contact,data.email],(err,result)=>{
            connection.release();
            
            if(err){
                console.log(err)
            return err
            }
           return result
        })
      
    })
return rs
    

 

}



module.exports = { homefun, list, createUser,showUsers }