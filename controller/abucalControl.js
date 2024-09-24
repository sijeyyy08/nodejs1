const ph = {
    abuc:(req, res)=>{
        res.render('index');
    },
    ho:(req, res)=>{
        res.render('home');
    },
    me:(req, res)=>{
        res.render('menu');
    },
    con:(req, res)=>{
        res.render('contact');
    },
    his:(req, res)=>{
        res.render('history');
    }
};


module.exports = ph;