import React, { Component } from 'react';

class Row extends Component {

    /* onCheckChanged = (event) =>{
        this.props.update.bind(this, this.props.id, event.target.checked)
    } */

    onDeleteButton = event => {
        event.preventDefault();
        this.props.remove(this.props.id)
    }
    render() {
        const { number, repo, id,update } = this.props;
        return (
            <tr>
                <td>{number}</td>
                <td>{repo.title}</td>
                <td>{repo.status === true ? 'PRIVATE' : 'PUBLIC'}</td>
                <td>{<input type="checkbox" defaultChecked={repo.status} onChange={update.bind(this, id, repo.status)} />}</td>
                <td>{repo.status === true ? 'YES' : 'NO'}</td>
                <td>{repo.language}</td>
                <td>{<button className="btn btn-danger" onClick={this.onDeleteButton}>Delete</button>}</td>
            </tr>
        );
    }
}

export default Row;
