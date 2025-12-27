const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Use for query
app.get('/ab', (req, res) => {
    const id =req.query.id
    res.send('Hello World!' + id)
})

// us for param
app.get("/:id",(req, res) => {
        const id = req.params.id
        res.send("Hiiii Your id is " + id)
    }
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
