const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));

app.get("/", (req, res) => {
    //res.sendFile(__dirname + "/public/fragments/sidebar/sidebar.html");
    res.sendFile(__dirname + "/public/frontpage/index.html");
});

app.get("/setup_npm", (req, res) => {
    res.sendFile(__dirname + "/public/content/setup_npm/setup_npm.html");
});

app.get("/express", (req, res) => {
    res.sendFile(__dirname + "/public/content/express/express.html");
});

app.get("/crud", (req, res) => {
    res.sendFile(__dirname + "/public/content/crud/crud.html");
})

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${PORT}`);
});