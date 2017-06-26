import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, string, number } from 'prop-types';
import './Product.scss';

const propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  description: string,
  price: number.isRequired,
  image: string.isRequired,
  sizes: arrayOf(string)
};

function renderGallery(isSingle, imageUrl, title, id) {
  const img = <img src={imageUrl} alt={title} className="ProductImage" />;
  const span = (
    <span className="ProductView Text Text--medium"><span className="Text Text--regular">Смотреть</span></span>
  );

  return isSingle ? img : <Link to={`/products/${id}`} className="ProductImageWrapper">{img}{span}</Link>;
}

function Product({ id, title, description, price, image, sizes, isSingle }) {
  const imageUrl = `/public/img/products/${image}`;

  return (
    <article className={isSingle ? 'Product Product--single' : 'Product'}>
      <div className="ProductMain">
        {renderGallery(isSingle, imageUrl, title, id)}
        {isSingle &&
          <div className="ProductThumbs">
            {[1, 2, 3, 4].map(i => <img className="ProductThumb" key={i} src={imageUrl} alt={`${title}-${i}`} />)}
          </div>}
      </div>

      <div className="ProductInfo u-clear">
        <h2 className="ProductTitle">
          <span className={isSingle ? 'Text Text--big' : 'Text Text--regular'}>{title}</span>
        </h2>
        <p className={`ProductDescription Text Text--${isSingle ? 'regular' : 'small'}`}>{description}</p>

        {isSingle &&
          <div>
            <h3 className="Text Text--regular">Размеры</h3>
            <div className="ProductSizes">
              {sizes.map((size, index) =>
                <a key={index} href="#" className="ProductSize Text Text--regular">{size}</a>
              )}
            </div>
          </div>}

        <div className="ProductPrice">
          <span className="Text Text--medium">{price}</span>
          <span className="ProductCurrency Text Text--small">грн</span>
        </div>
        <button className="ProductAdd">
          <span className={`ProductAddText Text Text--${isSingle ? 'medium' : 'regular'}`}>Купить</span>
        </button>
      </div>

    </article>
  );
}

Product.propTypes = propTypes;

export default Product;
