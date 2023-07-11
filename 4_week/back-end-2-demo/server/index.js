//bringing in express
const express = require('express')
const cors = require('cors')
//creating an express application and saving it to app
const app = express()

//middlewares use the .use function and every request that comes in goes through this middleware
app.use(express.json())
app.use(cors())


const { getMovies, addMovie } = require('./controller.js')


app.get('/api/movies', getMovies)
app.post('/api/movies', addMovie)

app.listen(4004, () => {
    console.log('up on 4004')
})

