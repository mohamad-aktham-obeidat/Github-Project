import React, { Component } from 'react'
import '../Style/style.css'
class Form extends Component {

    state = {
        newRepository: {
            title: "",
            language: "",
            status: false
        }
    }
    // Input Change Listener For All Form Inputs.
    handleChange = event => {
        this.setState({
            // Change Value Of Specific Keys in Key inside State.
            newRepository: {
                ...this.state.newRepository, // Copy The Entire Object In That State.
                [event.target.name]: event.target.value // Change Name And Value Depend On Input Change Status.
            }
        })
    }

    clearInputsValues = () =>{
        this.setState({
            // Change Value Of Specific Keys in Key inside State.
            newRepository: {
                title: '',
                language: ''
            }
        })
        document.getElementById('repo').value = ''
    }

    // Send The New Repository To App Component In Order To Add It To Database. 
    handleAddButton = event => {
        event.preventDefault();
        this.props.create(this.state.newRepository, this.clearInputsValues)
    }

    // Delete Specific Repository Depend On It's Id
    handleGetButton = event => {
        event.preventDefault();
        this.props.read();
    }

    render() {
        const {handleChange, handleAddButton, handleGetButton} = this
        const {title, language} = this.state.newRepository;
        return (
            <form className='repo-form d-flex flex-column pt-4 h-100 justify-content-between align-items-center'>
                <div className="row">
                    <div className="column ml-2">
                        <input className='form-control w-100 p-3 rounded' type="text" name="title" id="" placeholder="Repo Title" value={title} onChange={handleChange} />
                    </div>
                    <div className="column ml-2">
                        <input className='form-control w-100 p-3 rounded' type="text" name="language" id="" placeholder="language" value={language} onChange={handleChange} />
                    </div>
                    <div className="form-group column ml-2">
                        <select id='repo'  className='form-control' name='status' onChange={handleChange}>
                            <option value='' selected disabled hidden>Select Repo Status...</option>
                            <option value="true">Private</option>
                            <option value="false">Public</option>
                        </select>
                    </div>
                    <div className="column">
                        <input className='btn btn-primary rounded-btn w-100 ml-2 border border-white' type="submit" value="Add Repository" onClick={handleAddButton} />
                    </div>
                </div>
                <div className="row">
                    <input className='btn btn-danger mt-3 mb-3' type="submit" value="Get All Repositories" onClick={handleGetButton} />
                </div>
            </form>
        )
    }
}

export default Form;
