import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Product from './Product';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Object.assign([], this.props.products)
    }
  }

  componentWillMount() {
    axios.get('/api/products')
      .then(response => {
        const products = response.data;
        this.setState({ products });
      });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ products: Object.assign([], nextProps.products) });
  }

  render() {
    const { products } = this.state;

    return (
      <div className='product-list'>
        { products.map(product =>
          <Product product={product} />
        )}
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;