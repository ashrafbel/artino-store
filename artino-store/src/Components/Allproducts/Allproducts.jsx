import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import './Allproducts.css';

const AllProducts = () => {
  const navigate = useNavigate();
// Function to navigate to the product details page
  const handleProductpage = (id) => {
    navigate(`/productpage/${id}`);
  };
  const [products, setProducts] = useState([]);

// Fetch products from the API when the component mounts
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Something is wrong', error));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Scrollbar]}
      className="slider"
      spaceBetween={10}
      slidesPerView={3}
      navigation
    >
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <div className="product-card">
            <img className="product-img" src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
            <button className="buy-now" onClick={() => handleProductpage(product.id)}>Buy Now</button>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AllProducts;
