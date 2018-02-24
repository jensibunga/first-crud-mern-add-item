import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends React.Component {
  constructor(props) {
    super(props);



    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    let _this = this;
    let id = this.props.item._id;
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/items/delete/${id}`)
      .then(function (response) {
        console.log('deleted in database');
        _this.props.deleteItem(id);
      }).catch(function (error) {
        console.log(error)
      });

  }


  render() {
    return (
      <tr key={this.props.item._id}>
        <td>{this.props.item._id} </td>
        <td>{this.props.item.item}</td>
        <td>
          {/* <button className="btn btn-primary">Edit</button> */}
          <Link to={"/edit/" + this.props.item._id} className="btn btn-primary">Edit</Link>

        </td>

        <td>
          <button onClick={this.handleDelete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )




  }


}
export default TableRow;