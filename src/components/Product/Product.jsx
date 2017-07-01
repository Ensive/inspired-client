import React from 'react';
import { shape, oneOfType, arrayOf, string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import CommentsContainer from '../Comment/CommentsContainer';
import './Product.scss';

const propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  description: string,
  price: oneOfType([number, string]).isRequired,
  image: string,
  sizes: arrayOf(
    shape({
      id: number,
      name: string
    })
  )
};

// TODO: consider to rework this handler (interact with DOM)
function handleSizeChange(event) {
  document.querySelectorAll('.ProductSize').forEach((el, i, arr) => {
    el.className = el.className.replace(' is-active', '');
    if (i + 1 === arr.length) event.target.className += ' is-active';
  });
}

function renderGallery(isSingle, imageUrl, title, id) {
  if (!imageUrl) imageUrl = 'http://placehold.it/500x500';
  const img = <img src={imageUrl} alt={title} className="ProductImage" />;
  const span = (
    <span className="ProductView Text Text--medium"><span className="Text Text--regular">Смотреть</span></span>
  );

  return isSingle ? img : <Link to={`/products/${id}`} className="ProductImageWrapper">{img}{span}</Link>;
}

function renderThumbImages(imageUrl, title) {
  return (
    <div className="ProductThumbs u-clear">
      {[1, 2, 3, 4].map(i => <img className="ProductThumb" key={i} src={imageUrl} alt={`${title}-${i}`} />)}
    </div>
  );
}

function renderSizes(sizes) {
  return (
    <div>
      {/* TODO: consider to use select box for sizes */}
      <h2 className="Text Text--regular">
        Размеры
        <span className="Text Text--xsmall Text--light-gray"> (выбрать)</span>
      </h2>
      <div className="ProductSizes">
        {sizes.map(({ id, name }, index) =>
          <span key={id}>
            <label
              htmlFor={`product_color_${id}`}
              type="button"
              onClick={handleSizeChange}
              className={`ProductSize Text Text--regular Text--light${index === 0 ? ' is-active' : ''}`}
            >
              {name}
            </label>
            <input
              type="radio"
              name="product[color_id]"
              id={`product_color_${id}`}
              value={id}
              className="u-hidden"
              defaultChecked={index === 0}
            />
          </span>
        )}
      </div>
    </div>
  );
}

function renderColors(colors) {
  return (
    <div className="ProductColors">
      <h2 className="ProductColorsTitle Text Text--regular">
        Цвета
        <span className="Text Text--xsmall Text--light-gray"> (выбрать)</span>
      </h2>
      {colors.map(({ id, name, value }) =>
        <button
          type="button"
          style={{ backgroundColor: `${value}` }}
          className={`ProductColor ProductColor--${name} Text Text--small Text--light-gray`}
          key={id}
        />
      )}
    </div>
  );
}

function renderMaterial(material) {
  return (
    <div className="ProductMaterials">
      <h2 className="Text Text--regular">Материал</h2>
      <p className="ProductMaterial Text Text--small Text--light-gray">{material}</p>
    </div>
  );
}

function Product({ id, title, description, price, image, sizes, isSingle, comments, material, colors }) {
  const imageUrl = `/public/img/products/${image}`;
  const commentsTotal = comments.length;
  const sizesTotal = sizes.length;
  const colorsTotal = colors.length;

  return (
    <article className={isSingle ? 'Product Product--single' : 'Product'}>
      <div className="ProductWrapper u-clear">

        <div className="ProductMain">
          {renderGallery(isSingle, imageUrl, title, id)}
          {isSingle && renderThumbImages(imageUrl, title)}
        </div>

        <div className="ProductInfo u-clear">
          {/* TODO: fix <h1> issue */}
          <h1 className="ProductTitle">
            <span className={isSingle ? 'Text Text--big' : 'Text Text--regular'}>{title}</span>
          </h1>
          <p className={`ProductDescription Text Text--${isSingle ? 'regular' : 'xsmall'}`}>{description}</p>

          {isSingle && colorsTotal > 0 && renderColors(colors)}
          {isSingle && sizesTotal > 0 && renderSizes(sizes)}
          {isSingle && material && renderMaterial(material)}

          <div className="ProductPrice">
            <span className={`Text Text--${isSingle ? 'big' : 'medium'}`}>{parseInt(price, 10)}</span>
            <span className={`ProductCurrency Text Text--${isSingle ? 'regular' : 'xsmall'}`}>грн</span>
          </div>
          <button className="ProductAdd">
            <span className={`ProductAddText Text Text--${isSingle ? 'medium' : 'regular'}`}>Купить</span>
          </button>
        </div>

      </div>

      {false && commentsTotal > 0 && <CommentsContainer comments={comments} />}

    </article>
  );
}

Product.propTypes = propTypes;

export default Product;
