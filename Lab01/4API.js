const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res) =>{
    res.send('Hello World!!!')
})

app.post('/',(req,res) =>{
    res.send('Hello POST method')
})

app.put('/user',(req,res) =>{
    res.send('Hello PUT method')
})

app.delete('/user',(req,res) =>{
    res.send('Hello PUT delete ')
})

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
})