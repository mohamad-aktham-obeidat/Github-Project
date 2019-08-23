const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('server is working');
});

/*
//Example get request with database
app.get('/tasks', (req, res) => {
  mongo.getTasks((result) => {
    res.json(result);
  })
});
*/

// Start your code below
// @GET
// To Check If Server Works Or Not
app.get('/', (req, res) => {
  res.json('Server Works *.* ')
  
})

// @GET
// Return All Repositories From Database
app.get('/repositories', (req, res) => {
  mongo.getRepositories(result => {

    res.json(result)
  })
})

// @POST
// Add Specific Repository To Database.
app.post('/repositories', (req, res) => {
  mongo.addNewRepository(req.body, (response)=>{
    
    res.json(response);
  })
})

// @PUT
// Update Repository Status From (Public => Private) && (Private => Public).
app.put('/repositories/:id', (req, res) => {

  console.log(res);
  res.json(res);
})

// @DELETE
// Delete Specific Repository To Database.
app.delete('/repositories/:id', (req, res) => {

  console.log(res);
  res.json(res);
})



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));