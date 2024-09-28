const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())


app.use(express.static('public'))

app.use(express.json());   
app.use(express.urlencoded({ extended: true })); 

const apiRouter = require('./endpoints/route');
const APIBaseURL = '/api/v1';
app.use(APIBaseURL, apiRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}${APIBaseURL}`)
})
