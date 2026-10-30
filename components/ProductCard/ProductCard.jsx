import Link from "next/link";
import PropTypes from "prop-types";
import { Badge, Button, Card } from "react-bootstrap";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log(`Добавлено в корзину: ${product.title}`);
  };

  return (
    <Card className="h-100 shadow-sm border-0">
      <Link href={`/products/${product.id}`} className="text-decoration-none">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          style={{ height: 200, objectFit: "cover" }}
        />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title className={`mb-3 fs-5 ${styles.title}`}>
          <Link
            href={`/products/${product.id}`}
            className="text-decoration-none text-dark"
          >
            {product.title}
          </Link>
        </Card.Title>
        <Card.Text className={`text-secondary mb-3 ${styles.description}`}>
          {product.description}
        </Card.Text>
        <div className="d-flex align-items-center gap-3 mb-2">
          <span className="fs-5 fw-bold text-primary">{product.price} BYN</span>
          <span className="d-inline-flex align-items-center gap-1 text-secondary">
            <img src="/icons/star.svg" alt="" width={16} height={16} />
            {product.rating}
          </span>
        </div>
        <div className="mb-3">
          {product.inStock ? (
            <Badge bg="success">В наличии: {product.stock}</Badge>
          ) : (
            <Badge bg="secondary">Нет в наличии</Badge>
          )}
        </div>
        <div className={`d-flex flex-column gap-3 ${styles.actions}`}>
          {product.inStock ? <QuantitySelector /> : null}
          <Button
            variant="primary"
            className="w-100 d-inline-flex align-items-center justify-content-center gap-2"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <img
              src="/icons/cart.svg"
              alt=""
              width={18}
              height={18}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            В корзину
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
