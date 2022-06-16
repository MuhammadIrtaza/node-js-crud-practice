const global = require("../Config/global");
const Sql = global.sql;
const Joi = require("joi");

exports.list = (req, res) => {
    Sql.query('SELECT * FROM staff', (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
    });
};
exports.get = (req, res) => {
    Sql.query('SELECT * FROM staff Where staffID =?', [req.params.id], (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
    });
};
exports.delete = (req, res) => {
    Sql.query('DELETE FROM staff Where staffID =?', [req.params.id], (err, rows, fields) => {

        if (!err) res.send("Deleted");
        else console.log(err);
    });
};
exports.add = (req, res) => {

    const schema = {
        name: Joi.string().required()
    };
    const result = Joi.valid(req.body, schema);
    //console.log(result);
    if (!req.body.name) {
        res.status(400).send('name is required');
        return;
    }
    else {
        const data = req.body;
        Sql.query('INSERT INTO staff Set?', data, (err, rows, fields) => {
            if (!err) res.send(rows);
            else console.log(JSON.stringify(err));
        });
    }
};
