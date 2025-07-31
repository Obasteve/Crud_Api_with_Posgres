const express = require('express');

const app = express()

const port = 5000

app.use(express.json())

const { Client } = require('pg')

const con = new Client({
        host: "localhost",
        user: "postgres",
        port: 1990,
        password: "1990",
        database:"posgredemo"

})
con.connect().then(()=>console.log("Connected"))

con.query('select * from pgdemotable', (err,result ) =>{
    if(err)
    {
       console.log (err.message)
    }else{
        console.log(result.rows)
    }
})
 app.post('/post', (req, res) => {
    const {  id, firstname, lastname, email} = req.body
    const insert_query ='insert into pgdemotable(id, firstname, lastname, email) values($1, $2, $3, $4)'
    con.query(insert_query, [ id, firstname, lastname, email], (err, result)=>{
        if(err)
        {
            res.send(err.message)
        }else{
            res.send('Data inserted')
        }
    })
})
app.get('/fetchdata', (req,res)=>{
    const fetch_query = "select* from pgdemotable"
    con.query(fetch_query,(err, result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result.rows)
        }
    })
})
app.get('/fetchdata/:id', (req,res)=>{
    const id =req.params.id
    const fetch_query ="select * from pgdemotable where id = $1 "
    con.query(fetch_query,[id],(err, result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result.rows)
        }
    })

})

app.put('/update/:id', (req,res)=>{
    const id = Number(req.params.id);
    const { lastname } = req.body;

    const update_query= 'UPDATE pgdemotable SET lastname=$1 WHERE id =$2'

    con.query(update_query, [id, firstname, lastname, email], (err, result)=>{
        if(err)
        {
            res.send(err)
        }else{
            res.send("UPDATED")
        }
    })
})

app.delete('/delete/:id', (req, res)=>{
    const id = req.params.id;
    const delete_query = 'Delete from pgdemotable where id =$1'
    con.query(delete_query, [id], (err, result)=>{
        if(err)
        {
            res.send(err)
        }else {
            res.send("Deleted")
        }
    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
