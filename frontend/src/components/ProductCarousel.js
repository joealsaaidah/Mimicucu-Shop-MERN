import { useEffect } from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listTopRatedProduct } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, products, error } = productTopRated;

  useEffect(() => {
    dispatch(listTopRatedProduct());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img
              class='d-block mx-auto'
              src={product.image}
              alt={product.name}
              fluid
            />

            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} ($ {product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
