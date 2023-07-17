//bringing in express
const express = require('express')
const cors = require('cors')
//creating an express application and saving it to app
const app = express()

//middlewares use the .use function and every request that comes in goes through this middleware
app.use(express.json())
app.use(cors())


const { getMovies, addMovie, deleteMovie, updateMovie } = require('./controller.js')


app.get('/api/movies', getMovies)
app.post('/api/movies', addMovie)
app.delete('/api/movies/:id', deleteMovie)
app.put('/api/movies/:id', updateMovie)

app.listen(4000, () => {
    console.log('up on 4000')
})

