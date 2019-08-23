// Import Mongoose Files
const mongoose = require('mongoose'); 
// Connect This File To My DataBase.
mongoose.connect('mongodb://localhost/GitHubRepos', { useNewUrlParser: true });
// Store 'mongoose.connection' in Variable Called "db".
const db = mongoose.connection;
// Show Error Message If Connection Not Success
db.on('error', function () {
  console.log('mongoose connection error');
  console.log('__________________________________________')
});
// Show Success Message If Connection Successful
db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('__________________________________________')
});

/*
// Example schema
let tasksSchema = new mongoose.Schema({
  title: String,
  age: Number,
  isCompleted: Boolean,
});

// Example modal
let Tasks = mongoose.model('tasks', tasksSchema);

// Example function
let getTasks = (cb) => {
  Tasks.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

// example of module.export
module.exports = {
  getTasks
}
*/

// Start your code below

// Create New Mongo Scheme To Store Our Data In It.
let repositoryScheme = new mongoose.Schema({
  title: String,
  language: String,
  status: Boolean
})

// Store The Scheme In Variable To Deal With This Variable.
let Repositories = mongoose.model('repositories', repositoryScheme);

// @METHOD 'getRepositories'
// Return All Repositories From Database
let getRepositories = (callBack) => {
  console.log(callBack);
  Repositories.find({}, (error, response) => {
    if (error) {
      callBack(error);
    } else {
      callBack(response);
    }
  })
}

// @METHOD
// Add Specific Repository To Database.
let addNewRepository = (newRepository, callBack) => {
  Repositories.create(newRepository, (error, response) => {
    if(error){
      callBack(error)
    } else {
      getRepositories(callBack)
    }
  })
} 


module.exports = {
  getRepositories,
  addNewRepository
}

