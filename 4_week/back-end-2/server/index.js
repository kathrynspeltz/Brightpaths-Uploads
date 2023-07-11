//bringing in express
const express = require('express')
const cors = require('cors')
//creating an express application and saving it to app
const app = express()

//middlewares use the .use function and every request that comes in goes through this middleware
app.use(express.json())
app.use(cors())



const { getHouses, deleteHouse, createHouse, updateHouse } = require('./controller.js')

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.delete('/api/houses/:id', deleteHouse)
app.put('/api/houses/:id', updateHouse)


app.listen(4004, () => {
    console.log('up on 4004')
})