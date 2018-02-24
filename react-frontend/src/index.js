import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import ItemList from './components/ItemList';
import EditItem from './components/EditItem';
import AddItem from './components/AddItem';
import Navigation from './components/Navigation';

console.log('deploy test');

ReactDOM.render(
  <Router>
    
    <div className="container h-100">
      
      <div className="container h-100">
        <Route exact path='/' component={AddItem} />
        <Route path='/list' component={ItemList} />
        <Route path='/edit/:id' component={EditItem} />
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
