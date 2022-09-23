const express = require('express');
const router = express.Router();

const students = require('./students.json');
let studentList = students;
router.get('/', (req, res) => {
    res.send(studentList);// tra ve toan bo du lieu
});

const studentInfoWithAverageScocer = () => {
    for (let i = 0; i < studentList.students.length; i++){
            const arrScores = studentList.students[i].scores.map((item) => item.grade);
            const averageScores = arrScores.reduce((a,b) => a+b,0)/arrScores.length
            studentList.students[i].averageScores =averageScores
    }
}
router.get('/all-info', (req, res) =>{
    studentInfoWithAverageScocer();
    res.send(studentList)
})

// router.get('/hight-averageScores', (req, res) =>{
//     studentInfoWithAverageScocer();
//     const arrAvrScores = studentList.students.map((item) => item.averageScores);
//     const max = Math.max(...arrAvrScores);
//     // const index = arrAvrScores.indexOf(max); lấy điểm 1 ng cao nhất
//     let arrIndexes = [];
//     for(let i = 0; i <arrAvrScores.length; i++){
//         if(arrAvrScores[i] ==max) 
//         arrIndexes.push(i);
//         let result = [];
//         for(let i = 0; i< arrIndexes.length; i++){
//             result.push(studentList.students[arrIndexes[i]])
//         }
//     }
//     res.send(result)
// })

// router.get('/:sid', (req, res) =>{
//     const id = req.params.id;
//     const result = studentList.students.filter((item) => item.id)
//     res.send(result)
// })

// router.get('/delete', (req, res) =>{
//     const id = req.params.id;
//     const result = studentList.students.filter((item) => item.id)
//     data.splice(result,1);
//     res.send(result)
// })

// router.put('/delete', (req, res) =>{
//     const id = req.params.id;
//     const body = req.body;
//     const result = studentList.students.map((item) =>{
//         if(item.id== id) return {...item, ...body}
//         return item
//     } )
//     res.send(result)
// })


// router.post('/delete', (req, res) =>{
//     const body = req.body;

//     const highestSidInarr = studentList.students
//     const result = studentList.students.push(body);

//     res.send(result)
// })



module.exports = router