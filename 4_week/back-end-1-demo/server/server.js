//bringing in express
const express = require('express')
const cors = require('cors')
//creating an express application and saving it to app
const app = express()

//middlewares use the .use function and every request that comes in goes through this middleware
app.use(express.json())
app.use(cors())
//mock-data that acts like a database
const inventory = ['chair', 'shampoo', 'conditioner', 'bread', 'milk', 'peaches', 'desk', 'computer', 'ps5', 'record']

//endpoints - simple get endpoint with a query
app.get('/api/inventory', (req, res) => {
    if (req.query.item) {
        console.log(req.query)
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item))
        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
})



//endpoint with a param
app.get('/api/inventory/:id', (req, res) => {
    console.log(req.params.id)
    res.status(200).send(inventory[+req.params.id])
})

//listen for requests that are coming in
const SERVER_PORT = 5050
app.listen(SERVER_PORT, () => console.log(`up and running on ${SERVER_PORT}`))