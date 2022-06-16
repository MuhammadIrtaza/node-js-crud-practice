const global = require("../Config/global");
const Sql = global.sql;


exports.list = (req, res) => {
    Sql.query('SELECT * FROM student', (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
    });
};
exports.get = (req, res) => {
    Sql.query('SELECT * FROM student Where stuID =?', [req.params.id], (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
    });
};
exports.delete = (req, res) => {
    Sql.query('DELETE FROM student Where stuID =?', [req.params.id], (err, rows, fields) => {

        if (!err) res.send("Deleted");
        else console.log(err);
    });
};
exports.add = (req, res) => {
    const data = req.body;
    if (req.body.name == "") res.send("Name must be required");
    else Sql.query('INSERT INTO student Set?', data, (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(JSON.stringify(err));
    });
}
exports.ass = (req, res) => {
    res.send("working")
}

