module.exports = (app) => {
    const entry = require("../Module/student");
    app.get("/student/list", entry.list);
    app.get("/student/get/:id", entry.get);
    app.delete("/student/delete/:id", entry.delete);
    app.post("/student/add", entry.add);
    app.get("/", entry.ass);
};