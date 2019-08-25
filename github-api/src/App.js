import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from './Components/Form';
import Table from './Components/Table.js'

class App extends Component {
  state = {
    repositories: []
  }


  // componentDidMount() {
  //   this.getAllRepositories();
  // }
  // Get All Repositories From Database.
  getAllRepositories = () => {
    axios.get('/repositories')
      .then(response => {
        console.log(response.data)
        this.setState({ repositories: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  // Add New Repository To Database.
  addNewRepository = (newRepositoryData, clearData) => {
    axios.post('/repositories', newRepositoryData)
      .then(response => {
        this.setState({ repositories: response.data });
      })
      .catch(error => {
        console.log(error);
      })
      clearData();
  }

  //Update Repository Status
  updateRepositoryStatus = (repositoryID, newStatus) => {
    axios.put(`/repositories/${repositoryID}/${!newStatus}`)
      .then(response => {
        this.setState({ repositories: response.data });
      })
  }

  // Delete Repository From Database.
  deleteRepository = (repositoryID) => {
    axios.delete(`/repositories/${repositoryID}`)
      .then(response => {
        this.setState({ repositories: response.data });
      })
  }

  render() {
    return (
      <div className="App">
        {/* Render Form */}
        {this.state.repositories && <Form
          create={this.addNewRepository}
          read={this.getAllRepositories} />}

        {/* Render Repositories Table */}
        {this.state.repositories && <Table
          read={this.state.repositories}
          update={this.updateRepositoryStatus}
          remove={this.deleteRepository} />}
      </div>
    );
  }
}

export default App;
