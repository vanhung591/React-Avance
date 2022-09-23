const express = require('express');
const router = express.Router();
router.get('/tru', function(req, res){
    resa = req.query.a;
    resb = req.query.b;
    result = Number(resa) - Number(resb)
    res.send(`Kết quả a - b = ${JSON.stringify(result)} `);
});

router.get('/nhan', function(req, res){
  resa = req.query.a;
  resb = req.query.b;
  result = Number(resa) * Number(resb)
  res.send(`Kết quả a *b = ${JSON.stringify(result)} `);
});

router.get('/chia', function(req, res){
 const resa = req.query.a;
 const resb = req.query.b;
 let result;
 if(Number(resb) === 0) result = "Lỗi chia 0"
 else result = Number(resa) / Number(resb);
  
  res.send(`Kết quả a / b = ${JSON.stringify(result)} `);
});

router.get('/binhphuong', function(req, res){
  resa = req.query.a;
  result = Number(resa) **2
  res.send(`Kết quả a bình phương = ${JSON.stringify(result)} `);
});

module.exports = router;