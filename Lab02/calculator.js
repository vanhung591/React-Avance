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
// app.get('/chia', function(req, res){
//   resa = Number(req.query.a);
//   resb = Number(req.query.b);
//   result = (a,b)=> {if (resb == 0){
//     console.log('Lỗi chia 0');
//   }else a / b};
//   res.send(`Kết quả a / b = ${result} `);
// })
app.get('/chiadu', function(req, res){
  resa = Number(req.query.a);
  resb = Number(req.query.b);
  result = resa % resb

  res.send(`Kết quả a % b = ${result} `);
})
app.get('/binhphuong', function(req, res){
  resa = Number(req.query.a);
  // resb = Number(req.query.b);
  result = resa **2

  res.send(`Kết quả a bình phương = ${result} `);
})

app.get('/giaithua', function(req, res){
  resa = Number(req.query.a);
  // resb = Number(req.query.b);
  let result = 1;
  if (resa = 1) {
      return 1} 
      else 
          if (resa >1 ){
            for (let i = 1; i <= resa; i++) {
              result = result * i;}  
            return result;}    

  res.send(`Kết quả a giai thừa = ${result} `);
})
app.get('/luythua', function(req, res){
  resa = Number(req.query.a);
  resb = Number(req.query.b);
  result = resa ** resb
  res.send(`Kết quả a lũy thừa b = ${result} `);
})
app.get('/UCLN', function(req, res){
  resa = Number(req.query.a);
  resb = Number(req.query.b);
  var result = function(resa, resb) {
    if ( ! resb) {
        return resa;
    }
  
    return gcd(resb, resa % resb);
  };
  res.send(`Kết quả a lũy thừa b = ${result} `);
})



app.listen(port, () =>{
    console.log( `Server in live running http://localhost:${port}` );
});
