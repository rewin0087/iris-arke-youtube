import PropTypes from 'prop-types';
import React from 'react';
import YouTube from 'react-youtube';
import ProductDetail from './ProductDetail';

export default class Product extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { ...this.props, player: null, showOverlay: false };

    this.showPopup = this.showPopup.bind(this);
    this.setPlayer = this.setPlayer.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  showPopup() {
    const { product: { timecode }, player } = this.state;

    if (!player) { return };

    const interval = setInterval(() => {
      const currentTime = player.getCurrentTime();
      const showOverlay = currentTime > timecode;

      this.setState({ showOverlay });

      if (showOverlay) {
        clearInterval(interval);
      }
    }, 1000);
  }

  togglePopup(e) {
    e.preventDefault();
    const { showOverlay } = this.state;

    this.setState({ showOverlay: !showOverlay });

    return false;
  }

  setPlayer(player) {
    this.setState({ player });
  }

  render() {
    const { product, showOverlay } = this.state;
    const { innerHeight, innerWidth } = window;

    return (
      <div className="product-container">
        <h2>
          <span>{product.name}</span>
          <a href="#" className="toggle-details" onClick={this.togglePopup}>Show Details</a>
        </h2>

        <YouTube
          title={product.name}
          videoId={product.youtube_id}
          opts={{ height: innerHeight, width: innerWidth }}
          onReady={ e => this.setPlayer(e.target) }
          onPlay={this.showPopup}
        />

        {
          showOverlay &&
          <ProductDetail product={product} closePopup={this.togglePopup} />
        }
    </div>
    );
  }
}
