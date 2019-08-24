const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

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

    /* app.get('/', (req, res) => {
      res.json('Server Works *.* ')

    }) */



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
  mongo.addNewRepository(req.body, (response) => {
    res.json(response);
  })
})

// @PUT
// Update Repository Status From (Public => Private) && (Private => Public).
app.put('/repositories/:id/:newStatusValue', (req, res) => {
  let repoID = req.params.id
  let repoStatus = req.params.newStatusValue;
  mongo.updateRepository(repoID, repoStatus, response => {
    res.json(response)
  })
})

// @DELETE
// Delete Specific Repository To Database.
app.delete('/repositories/:id', (req, res) => {
  // let repoID = req.originalUrl.slice(14)
  let repoID = req.params.id
  mongo.deleteRepository(repoID, response => {
    res.json(response);
  })
})



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));