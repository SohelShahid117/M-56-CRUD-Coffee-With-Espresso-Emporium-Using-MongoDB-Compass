const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

//middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!enJoy server site language')
})

app.listen(port, () => {
    console.log(`my server is running at http:localhost:${port}`)
  console.log(`Example app listening on port ${port}`)
})