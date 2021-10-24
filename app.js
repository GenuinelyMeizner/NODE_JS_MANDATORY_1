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

app.get("/http_methods", (req, res) => {
    res.sendFile(__dirname + "/public/content/http_methods/http_methods.html");
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${PORT}`);
});

//Showcase http routes for html_routes.html

let customers = [{
    id: 1,
    firstName: "Frederik",
    lastName: "Meizner"
}];

let AUTO_INCREMENT = 1;

//GET request with request parameter
app.get("/customer/:id", (req, res) => {
    const foundCustomer = customers.find(customer => customer.id === Number(req.params.id));
    foundCustomer ? res.send(foundCustomer) : res.sendStatus(404);
});

//POST request
app.get("/customer", (req, res) => {
    const customer = req.body;
    customer.id = ++AUTO_INCREMENT;
    customers.push(customer);
    res.send(req.body);
});

//PATCH request
app.get("/customer/:id", (req, res) => {
    let customerToPatch;
    customers = customers.map(customer => {
        if (customer.id === Number(req.params.id)) {
            customerToPatch = {...customer, ...req.body, id: customer.id };
            return customerToPatch;
        }
        return customer;
    });
    customerToPatch ? res.send(customerToPatch) : res.sendStatus(404);
});

//DELETE request
app.get("customer/:id", (req, res) => {
    let customerToDelete = false;
    customers = customers.filter(customer => {
        const notToDelete = customer.id !== Number(req.params.id);
        if (!notToDelete) customerToDelete = true;
        return customerToDelete;
    });
    customerToDelete ? res.sendStatus(200) : res.sendStatus(400);
});