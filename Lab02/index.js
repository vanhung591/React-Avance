const express = require('express');
const app = express();
const port = 3000;
const math = require('./math')
app.use('/math', math)
// app.get('/cong', function(req, res){
// //   resa = Number(req.query.a);
// //   resb = Number(req.query.b);
// //   result = (resa + resb)
// //   res.send(`Kết quả a + b = ${result} `);

//   resa = req.query.a;
//   resb = req.query.b;
//   result = Number(resa) + Number(resb)
//   res.send(`Kết quả a + b = ${JSON.stringify(result)} `);
// });

// app.get('/tru', function(req, res){
//       resa = req.query.a;
//       resb = req.query.b;
//       result = Number(resa) - Number(resb)
//       res.send(`Kết quả a - b = ${JSON.stringify(result)} `);
// });

// app.get('/nhan', function(req, res){
//     resa = req.query.a;
//     resb = req.query.b;
//     result = Number(resa) * Number(resb)
//     res.send(`Kết quả a *b = ${JSON.stringify(result)} `);
// });

// app.get('/chia', function(req, res){
//    const resa = req.query.a;
//    const resb = req.query.b;
//    let result;
//    if(Number(resb) === 0) result = "Lỗi chia 0"
//    else result = Number(resa) / Number(resb);
    
//     res.send(`Kết quả a / b = ${JSON.stringify(result)} `);
// });

// app.get('/binhphuong', function(req, res){
//     resa = req.query.a;
//     result = Number(resa) **2
//     res.send(`Kết quả a bình phương = ${JSON.stringify(result)} `);
// });

// app.get('/giaithua', function(req, res){
//     resa = req.query.a;
//     // let result = 1;
//     // for( let i = 1; i <= resa; i++) result = result*i;
//     // res.send(`Kết quả a giai thừa = ${JSON.stringify(result)}`);
//     //đệ qui cách 2
//     function factorial(value) {
//         if(value == 1) return 1
//         return value * factorial(value - 1)
//     }
//     const result = factorial(resa);
//     res.send(`Kết quả a giai thừa = ${JSON.stringify(result)}`);
// });

// app.get('/luythua', function(req, res){
//     const resa = req.query.a;
//     const resb = req.query.b;
//     let result = 1;
//     // const result = Number(resa) ** Number(resb);
//     // const result = Math.pow(resa,resb);
//     for( let i = 1; i <= resb; i++) {
//         result = resa*result;
//     }
//     res.send(`Kết quả a lũy thừa b = ${JSON.stringify(result)} `);
// });

// app.get('/uoc-chung-lon-nhat', function(req, res){
//     const resa = req.query.a;
//     const resb = req.query.b;
    
//     function GCN(a, b) {
//         let gcn = 1;
//     //     if (!b) {
//     //         return a;
//     //     }
//     //     return GCN(b, a % b);
//     // Dùng For
//         // for ( let i = 1; i <=a && i <=b; i++){
//         //     if(a%i === 0 && b% i ===0) {
//         //         gcn = i;
//         //     }
//         // }
//         // return gcn;
//     // Đệ qui
//     function GCN2(a, b){
//         if(a===b) return a;
//         if(a>b)
//             GCN(a-b,b);
//         else GCN(a,b-a)
//     }
//     };
    
//     const result = GCN(resa, resb);
//     res.send(`Kết quả UCLN của a và b = ${JSON.stringify(result)} `);
// });

// app.get('/boi-chung-nho-nhat', function(req, res){
//     const resa = req.query.a;
//     const resb = req.query.b;

//     function LCM (a, b) {
//         return (a*b)/GCN(a,b)
//     }
//     result = LCM (resa, resb)
//     res.send(`Kết quả Bội chung nhỏ nhất cảu a b = ${JSON.stringify(result)} `);
// });
// app.get('/la-so-nguyen-to', function(req, res){
//     const resa = req.query.a;
//     let count = 1;
//      for( let i = 2; i < resa; i++){
//             if(resa % i === 0)  count +=1;
//      }
//     result = count > 1?false : true
//     res.send(`Kết quả a có phải số nguyên tố không = ${JSON.stringify(result)} `);
// });
// app.get('/sohoanhao', function(req, res){
//     const resa = req.query.a;
//     let sum = 0;
//      for( let i = 1; i < resa; i++){
//             if(resa % i === 0)  sum +=i;
//      }
//     result = sum == resa?true : false
//     res.send(`Kết quả có phải số hoàn hảo không = ${JSON.stringify(result)} `);
// });
// app.get('/hoanvi', function(req, res){
//     const resa = req.query.a;
//     const resb = req.query.b;
//     result = {a :resb, b:resa}
//     res.send(`Kết quả có phải số hoàn hảo không = ${JSON.stringify(result)} `);
// });



app.listen(port, () =>{
    console.log( `Server in live running http://localhost:${port}` );
});