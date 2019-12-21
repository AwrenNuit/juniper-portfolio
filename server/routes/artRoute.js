const express = require(`express`);
const router = express.Router();
const pool = require(`../modules/pool`);

router.delete(`/:id`, (req, res)=>{
    console.log('in /:id DELETE with:', req.params.id);
    let id = [req.params.id];
    let SQLquery = `DELETE FROM art WHERE id = $1;`;
    pool.query(SQLquery, id)
    .then(result=>{
        res.sendStatus(200);
    }).catch(error=>{
        console.log('ERROR DELETING ART ----------------------------->', error);
        res.sendStatus(500);
    });
});

router.get(`/`, (req, res)=>{
    console.log('in / GET');
    let SQLquery = `SELECT * FROM art;`;
    pool.query(SQLquery)
    .then(result=>{
        res.send(result.rows);
    }).catch(error=>{
        console.log('ERROR GETTING ART ----------------------------->', error);
        res.sendStatus(500);
    });
});

router.post(`/`, (req, res)=>{
    console.log('in / POST with:', req.body);
    let id = [req.body.name, req.body.medium, req.body.description, req.body.year + '-01-01', req.body.photo];
    let SQLquery = `INSERT INTO art("name", "medium", "description", "year", "photo") VALUES($1, $2, $3, $4, $5);`;
    pool.query(SQLquery, id)
    .then(result=>{
        res.sendStatus(201);
    }).catch(error=>{
        console.log('ERROR POSTING ART ----------------------------->', error);
        res.sendStatus(500);
    });
});

router.put(`/:id`, (req, res)=>{
    console.log('in /:id PUT with:', req.params.id);
    let id = [req.params.id];
    let SQLquery = `UPDATE FROM art WHERE id = $1;`;
    pool.query(SQLquery, id)
    .then(result=>{
        res.sendStatus(200);
    }).catch(error=>{
        console.log('ERROR PUTTING ART ----------------------------->', error);
        res.sendStatus(500);
    });
});

module.exports = router;