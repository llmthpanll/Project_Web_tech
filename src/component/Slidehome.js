import React from 'react';
import Carousel from 'nuka-carousel';
import pic from "../path/home.json";

export default class Slidehome extends React.Component {
  render() {
    return (
      <Carousel>
        <img src="../Page/Pic/1.jpg" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}
