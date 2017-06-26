import React from 'react';
import { object, arrayOf } from 'prop-types';

import Product from '../components/Product/Product';

const propTypes = {
  match: object,
  products: arrayOf(object)
};

function Single({ match, products }) {
  const id = match.params.id;
  const product = products.find(product => product.id == id);

  return (
    <div className="container">
      <div className="Products Products--single u-clear">
        <Product isSingle {...product} />
      </div>
    </div>
  );
}

Single.propTypes = propTypes;

export default Single;
