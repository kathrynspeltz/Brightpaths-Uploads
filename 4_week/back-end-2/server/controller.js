const { response } = require('express')
const houseDatabase = require('./db.json')
let houseIndex = 4

module.exports = {
    getHouses: ((req, res) => {
        res.status(200).send(houseDatabase)
    }),

    deleteHouse: ((req, res) => {
        const id = +req.params.id
        for (let i = 0; i < houseDatabase.length; i++) {
            if (houseDatabase[i].id === id) {
                houseDatabase.splice(i, 1)
                houseIndex1 = i;
            }
        }

        res.status(200).send(houseDatabase)
        return
    }),

    deleteMovie: (req, res) => {
        const id = +req.params.id;

        for (let i = 0; i < movieDatabase.length; i++) {
            if (movieDatabase[i].id === id) {
                movieDatabase.splice(i, 1)
                res.status(200).send(movieDatabase)
                return
            }
        }
        res.status(400).send("Movie not found")
    },

    createHouse: ((req, res) => {
        const { price, address, imageURL } = req.body

        houseDatabase.push({ price: price, address: address, imageURL: imageURL, id: houseIndex })
        res.status(200).send(houseDatabase)
        houseIndex += 1
    }),

    updateHouse: ((req, res) => {
        const id = +req.params.id
        let houseIndex1;
        for (let i = 0; i < houseDatabase.length; i++) {
            if (houseDatabase[i].id === id) {
                houseIndex1 = i;
            }
        }
        const type = req.body.type
        if (type === "plus") {
            houseDatabase[houseIndex1].price++
            res.status(200).send(houseDatabase)
        } else {
            houseDatabase[houseIndex1].price--
            res.status(200).send(houseDatabase)
        }
    })

}