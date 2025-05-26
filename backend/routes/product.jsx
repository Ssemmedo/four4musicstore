const express = require('express');
const Database = require('../database/db');
const router =  express.Router();

router.get('/products', (req, res)=>{
    Database().query('SELECT * FROM products', (err, rows, field)=>{
        if (err){
            console.error(err.stack);
            res.statusCode(500).send("Error fetchig data");
            return;
        }
        res.json(rows);
    })
})
