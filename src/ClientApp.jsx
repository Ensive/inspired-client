import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout
import Header from './components.layout/Header/Header';
import Menu from './components.layout/Menu/Menu';

// pages
import Home from './components.pages/Home';
import Single from './components.pages/Single';

import './main.scss';
import data from '../products.json';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      products: data.products
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    const results = data.products.filter(
      product => `${product.title} ${product.description}`.toUpperCase().indexOf(event.target.value.toUpperCase()) >= 0
    );

    this.setState({
      query: event.target.value,
      products: results
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header query={this.state.query} onSearch={this.onSearch} />
          <Menu />
          <Switch>
            <Route exact path="/" render={props => <Home products={this.state.products} {...props} />} />
            <Route exact path="/products" render={props => <Home products={data.products} {...props} />} />
            <Route path="/products/:id" render={props => <Single products={data.products} {...props} />} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
