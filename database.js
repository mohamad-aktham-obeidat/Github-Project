// Import Mongoose Files
const mongoose = require('mongoose');
// Connect This File To My DataBase.
mongoose.connect('mongodb://localhost/GitHubRepos', { useNewUrlParser: true })
  .then(() => {
    console.log('Mongoose Connected Successfully *.*');
    console.log('__________________________________________________')
  })
  .catch(error => { console.log(`${error} -_-`) });
// Store 'mongoose.connection' in Variable Called "db".
const db = mongoose.connection;
// Show Error Message If Connection Not Success

// [Another Way To Handle Connection To MongoDB]
            /* db.on('error', function () {
              console.log('mongoose connection error');
              console.log('__________________________________________')
            });
            // Show Success Message If Connection Successful
            db.once('open', function () {
              console.log('mongoose connected successfully');
              console.log('__________________________________________')
            }); */

/*
// Example schema #1
let tasksSchema = new mongoose.Schema({
  title: String,
  age: Number,
  isCompleted: Boolean,
});

// Example schema #2
let tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  isCompleted:{
    type: Boolean,
    default: false
  }
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
    if (error) {
      callBack(error)
    } else {
      getRepositories(callBack)
    }
  })
}

// @ METHOD
// Update Private Status Of a Specific Repository In Database.
let updateRepository = (repoID, swapStatus, callBack) => {
  console.log('REPOSITORIES', Repositories)
  Repositories.updateOne({ _id: repoID }, { $set: { status: swapStatus } }, (error, response) => {
    if (error) {
      callBack(error)
    } else {
      getRepositories(callBack)
    }
  })
}

// @ METHOD
// Delete Specific Repository From Database.
let deleteRepository = (repoID, callBack) => {
  Repositories.findOneAndDelete({ _id: repoID }, (error, response) => {
    if (error) {
      callBack(error);
    } else {
      getRepositories(callBack);
    }
  })
}

// Export Our "Database Methods" To Deal With It In Our "Express Server".
module.exports = {
  getRepositories,
  addNewRepository,
  updateRepository,
  deleteRepository
}

