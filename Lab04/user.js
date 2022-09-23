const express = require('express');
const router = express.Router();
const users = require('./users.json');
let usertList = users;

router.get('/', (req, res) => {
    res.send(usertList);// tra ve toan bo du lieu
});

router.get('/user', (req, res) => {
    const user = usertList.role_group.user.users;

    res.send(user);
});
router.get('/staff', (req, res) => {
    const staff = usertList.role_group.staff.users;
    res.send(staff);
});

router.get('/admin', (req, res) => {
    const admin = usertList.role_group.admin.users;
    res.send(admin);
});


module.exports = router