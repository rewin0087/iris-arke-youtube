import React from 'react';
import PropTypes from 'prop-types';

const ProductDetail = ({product, closePopup}) => {
  return(
    <div className="product-overlay">
      <a href="#" className="toggle-overlay" onClick={closePopup}>&times;</a>

      <div className='product-detail'>
        <div className="preview">
          <img src={product.image.url} />
        </div>

        <div className="info">
          <h3>
            <a href={product.youtube_url} target="_blank"> {product.name}</a>
            <span>[{product.kind}]</span>
          </h3>
          <p>{product.description}</p>
          <button>{product.button_text}</button>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

export default  ProductDetail;
