import React from 'react';
import { object, arrayOf } from 'prop-types';

import Product from '../components/Product/Product';
import Loading from '../components.layout/Loading/Loading';

const propTypes = {
  match: object,
  products: arrayOf(object)
};

function Single({ match, products }) {
  const id = match.params.id;
  const product = products.find(product => parseInt(product.id, 10) === parseInt(id, 10));

  return (
    <div className="container">
      <div className="Products Products--single u-clear">
        {product ? <Product isSingle {...product} /> : <Loading />}
      </div>
    </div>
  );
}

Single.propTypes = propTypes;

export default Single;
