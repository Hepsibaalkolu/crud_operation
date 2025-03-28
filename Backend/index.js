const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()


const cors = require('cors')
const router = require('./Routes/router')

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5002, () => {
  console.log("Server running on port 5002");
});
