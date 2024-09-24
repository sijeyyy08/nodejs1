const express = require('express');
const router = express.Router();

router.get('/', hp.abuc)
router.get('/home', hp.ho)
router.get('/menu', hp.me)
router.get('/contact', hp.con)
router.get('/history', hp.his)
module.exports = router;
const ph = {
    abuc: (req, res) => {
        res.render('index');
    },
    ho: (req, res) => {
        res.render('home');
    },
    me: (req, res) => {
        res.render('menu');
    },
    con: (req, res) => {
        res.render('contact');
    },
    his: (req, res) => {
        res.render('history');
    }
};
exports.ph = ph;
