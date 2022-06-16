const express = require("express");
const app = express();
app.use(express.json());

// get all the Students details
require('./Routes/student')(app);
// get all the staff details
require('./Routes/staff')(app);
app.listen(1000, () => console.log("Listening to port 1000"));