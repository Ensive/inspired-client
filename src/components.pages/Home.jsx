import React from 'react';
import { arrayOf, object } from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Product from '../components/Product/Product';

const propTypes = {
  products: arrayOf(object)
};

function Home({ products }) {
  return (
    <div className="container">
      <div className="Products u-clear">
        <CSSTransitionGroup
          transitionName="SlideIn"
          transitionAppear={false}
          transitionAppearTimeout={0}
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}
        >
          {products.map(product => <Product key={product.id} {...product} />)}
        </CSSTransitionGroup>
      </div>
    </div>
  );
}

Home.propTypes = propTypes;

export default Home;
