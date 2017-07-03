import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

// layout
import Header from './components.layout/Header/Header';
import Menu from './components.layout/Menu/Menu';

// pages
import Home from './components.pages/Home';
import Single from './components.pages/Single';

import './main.scss';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  state = {
    query: '',
    products: []
  };

  componentDidMount() {
    moment.locale('ru');
    this.getProducts();
  }

  onSearch = event => {
    const newValue = event.target.value;
    const results = this.allProducts.filter(
      p => `${p.title} ${p.description}`.toUpperCase().indexOf(newValue.toUpperCase()) >= 0
    );

    this.setState({ query: newValue, products: results });
  };

  getProducts = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3001/api/v1/products.json',
      headers: {
        'X-Key-Inflection': 'camel'
      }
    }).then(({ data }) => {
      this.allProducts = data;
      this.setState({ products: data });
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Header query={this.state.query} onSearch={this.onSearch} />
          <Menu />
          <Switch>
            <Route exact path="/" render={props => <Home products={this.state.products} {...props} />} />
            <Route exact path="/products" render={props => <Home products={this.state.products} {...props} />} />
            <Route path="/products/:id" render={props => <Single products={this.state.products} {...props} />} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
