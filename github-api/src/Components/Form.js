import React, { Component } from 'react'
import '../Style/style.css'
class Form extends Component {

    state = {
            title:"",
            language: "",
            status: false
    }

    handleTitleChange = event => {
        console.log('TITLE', event.target.value)
        this.setState({
            title : event.target.value
        })
        console.log('STATE', this.state)
    }

    handleLanguageChange = event => {
        console.log('LANGUAGE', event.target.value)
        this.setState({
            language : event.target.value
        })
        console.log('STATE', this.state)

    }

    handleStatusChange = event => {
        console.log('STATUS', event.target.value)
        this.setState({
            status : event.target.value
        })
        console.log('STATE', this.state)
    }

    handleAddButton = event =>{
        event.preventDefault();
        this.props.create(this.state)
    }


    handleGetButton = event => {
        event.preventDefault();
        this.props.read();
    }

    render() {
        
        return (
            <form className='repo-form d-flex flex-column pt-4 h-100 justify-content-between align-items-center'>
                <div className="row">
                    <div className="column ml-2">
                        <input className='form-control w-100 p-3 rounded' type="text" name="title" id="" placeholder="Repo Title" onChange={this.handleTitleChange} />
                    </div>
                    <div className="column ml-2">
                        <input className='form-control w-100 p-3 rounded' type="text" name="language" id="" placeholder="language" onChange={this.handleLanguageChange} />
                    </div>
                    <div className="form-group column ml-2">
                        <select defaultValue='Select Repo State...' className='form-control w-100 p-3 rounded' onChange={this.handleStatusChange}>
                            <option value="true">Private</option>
                            <option value="false">Public</option>
                        </select>
                    </div>
                    <div className="column">
                        <input className='btn btn-primary rounded-btn w-100 ml-2 border border-white' type="submit" value="Add Repository" onClick={this.handleAddButton} />
                    </div>
                </div>
                <div className="row">
                    <input className='btn btn-danger mt-3 mb-3' type="submit" value="Get All Repositories" onClick={this.handleGetButton} />
                </div>
            </form>
        )
    }
}

export default Form;
