import React, { Component } from 'react'
import Row from './Row'
class Table extends Component {
    render() {
        const {read, update, remove} = this.props;
        return (
            <div>
                 <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Title</th>
                            <th scope="col">Repo. State</th>
                            <th scope="col">Check</th>
                            <th scope="col">is Private</th>
                            <th scope="col">Language</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {read.map((repo, i) => <Row number={i+1} key={i} id={repo._id} repo={repo} update={update} remove={remove}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
