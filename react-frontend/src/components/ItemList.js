import React from 'react';
import ItemSErvice from '../ItemService';
import axios from 'axios';
import TableRow from './TableRow';
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    }

    this.deleteItem =this.deleteItem.bind(this);
  }
  componentDidMount() {
    let _this = this;
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/items`)
      .then(function (response) {
        _this.setState({
          items: response.data
        })
        console.log(response)
      }).catch(function (error) {
        console.log(error);
      });
  }

  deleteItem(deleteId) {
    let itemsToKeep = this.state.items.filter(function(item) {
      return item._id !== deleteId;
    });

    this.setState({
      items:itemsToKeep
    })
  }

  render() {
    let _this = this
    return (
      <div className='container bg-light'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>No.</td>
              <td>Item</td>
            </tr>
          </thead>
          <tbody>
            {this.state.items && this.state.items.map(function (item) {
              return (
                <TableRow key={item._id} item={item} deleteItem={_this.deleteItem} />
              )
            })}

          </tbody>
        </table>



      </div>
    )
  }

}
export default ItemList;