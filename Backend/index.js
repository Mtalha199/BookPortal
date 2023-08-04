const express = require('express')
const app = express()
const port = 5000;
app.use(express.json());
require("./DB/connection")
const cors=require('cors')

app.use(cors({

    origin:'*',
    methods:["POST","PUT","PATCH","GET"]
}))
const bookRoute=require("./Router/bookRouter")
app.use("/book",bookRoute)
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})