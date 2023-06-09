const express = require("express");
const router = require("./routes/router");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use("/api", router)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})