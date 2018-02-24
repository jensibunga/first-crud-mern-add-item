import React, { component } from 'react';
import ItemService from '../ItemService';

class AddItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '',}
    this.addItemService = new ItemService();

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleChange(event){
    
     this.setState({value: event.target.value});
  }

  handleSubmit(event){
    //alert(this.state.value);
    event.preventDefault();//=> prevents the get request default in the 
    this.addItemService.sendData(this.state.value);
    this.props.history.push('/list');//=> this sends the user to the homepage again
  }




  render() {
    return (
      <div className="container h-100">
        <div className="row h-100">
          <form onSubmit={this.handleSubmit} className="offset-md-4 col-md-4">
          
            <label>
              Add Item:
            <input type='text' value={this.state.value}
                onChange={this.handleChange} className='form-control' />
            </label><br />
            <input type='submit' value='Submit' className='btn btn-primary' />

          </form>
        </div>
      </div>
    )
  }
}

export default AddItem;