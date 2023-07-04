const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
const users = require ('./src/data/users.json')



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users',(req, res) =>{
 res.send(users).json()
})
app.get('/user/:id', (req, res)=>{
   let idParam = parseInt(req.params.id)
   

    let userFiltered = users.filter(user => user.id === idParam )
    console.log(userFiltered);
    res.status(200).send(userFiltered)


})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})