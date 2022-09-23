const express = require('express');
const app = express();
const port = 3000;

app.get('/cong', function(req, res){
  resa = Number(req.query.a);
  resb = Number(req.query.b);
  result = (resa + resb)
  res.send(`Kết quả a + b = ${result} `);
});

app.get('/tru', function(req, res){
  resa = Number(req.query.a);
  resb = Number(req.query.b);
  result = (resa - resb)
  res.send(`Kết quả a - b = ${result} `);
});

app.get('/nhan', function(req, res){
  resa = Number(req.query.a);
  resb = Number(req.query.b);
  result = (resa * resb)
  res.send(`Kết quả a * b = ${result} `);
});

app.get('/chia', function(req, res){
  resa = Number(req.query.a);
  resb = Number(req.query.b);
  result = resa / resb

  res.send(`Kết quả a / b = ${result} `);
})

app.listen(port, () =>{
    console.log( `Server in live running http://localhost:${port}` );
});
