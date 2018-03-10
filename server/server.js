const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT;
app.use(express.static(path.join(__dirname,"../")));

app.get("*",(req,res) =>{
    res.sendFile(`index.html`);
});

app.listen(port,() => {
    console.log(`listening on port ${port}...`);
});