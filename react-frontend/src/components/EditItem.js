import React from 'react';
import axios from 'axios';


class EditItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: " "
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    let _this = this;
    let id = this.props.match.params.id
    
    process.env.REACT_APP_BACKEND_URL

    axios.get('process.env.REACT_APP_BACKEND_URL/items/edit/' + id)
      .then(function (response) {
        _this.setState({
          value: response.data.item
        })
      }).catch(function (error) {
        console.log(error);
      })

  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    })

  }

  handleSubmit(event) {
    event.preventDefault();

    let id = this.props.match.params.id
    let _this = this;

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/items/update/${id}`, {
      itemText: this.state.value
    }).then(function (response) {
      // console.log('saved to database');
      _this.props.history.push('/list');
    }).catch(function (error) {
      console.log(error)
    });
  }

  render() {


    return (
      <div className="row h-100">
      <form onSubmit={this.handleSubmit} className="col-md-4 offset-md-4">
        <label>
          Edit:
      <input type="text" value={this.state.value} className="form-control"
            onChange={this.handleChange} />
        </label><br />
        <input type="submit" value="Update" className="btn btn-primary" />
      </form>
      </div>
    )


  }

}

export default EditItem;