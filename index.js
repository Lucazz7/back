const express = require('express')
const server = express();
const cors = require('cors')
const bioReactor = require('./src/data/bioReactor.json')
const ibc = require('./src/data/ibc.json')

server.use(cors())

server.get('/bioreactor_view', (req, res) => {
    return res.json(bioReactor)
})

server.get('/ibc_view', (req, res) => {
    return res.json(ibc)
})

server.listen(3000, () => {{
    console.log('servidor ok')
}})