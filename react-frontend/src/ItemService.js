import axios from 'axios';

class ItemService {
  sendData(data) {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/items/add/post`, {
      item: data
    }).then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });

  }
}
export default ItemService;