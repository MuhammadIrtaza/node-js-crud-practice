module.exports = (app) => {
    const entry = require("../Module/staff");
    app.get("/staff/list", entry.list);
    app.get("/staff/get/:id", entry.get);
    app.delete("/staff/delete/:id", entry.delete);
    app.post("/staff/add", entry.add);
};