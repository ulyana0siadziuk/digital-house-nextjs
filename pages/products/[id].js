import Head from "next/head";
import Link from "next/link";
import { Badge, Button, Col, Row } from "react-bootstrap";
import QuantitySelector from "@/components/QuantitySelector/QuantitySelector.jsx";
import RenderInfo from "@/components/RenderInfo/RenderInfo.jsx";
import {
  formatDateTime,
  getProductById,
  getProductIds,
} from "@/data/products.js";

export default function ProductPage({ product, generatedAt }) {
  return (
    <>
      <Head>
        <title>{`${product.title} — Digital House`}</title>
        <meta name="description" content={product.description} />
      </Head>
      <p className="mb-3">
        <Link href="/products">← Назад в каталог</Link>
      </p>
      <RenderInfo
        mode="SSG"
        generatedAt={generatedAt}
        extra="После production-сборки это время не меняется при обновлении: страница уже лежит как статический HTML."
      />
      <Row className="g-4 align-items-start">
        <Col md={5}>
          <img
            src={product.image}
            alt={product.title}
            className="w-100 rounded shadow-sm"
            style={{ objectFit: "cover", maxHeight: 420 }}
          />
        </Col>
        <Col md={7}>
          <h1 className="mb-3">{product.title}</h1>
          <p className="text-secondary fs-5">{product.fullDescription}</p>
          <div className="d-flex align-items-center gap-3 flex-wrap mb-4">
            <span className="fs-3 fw-bold text-primary">{product.price} BYN</span>
            <span className="d-inline-flex align-items-center gap-1 text-secondary">
              <img src="/icons/star.svg" alt="" width={18} height={18} />
              {product.rating}
            </span>
            {product.inStock ? (
              <Badge bg="success">В наличии: {product.stock} шт.</Badge>
            ) : (
              <Badge bg="secondary">Нет в наличии</Badge>
            )}
          </div>
          <div className="d-flex flex-column align-items-start gap-3">
            {product.inStock ? <QuantitySelector className="" /> : null}
            <Button
              variant="primary"
              disabled={!product.inStock}
              style={{ minWidth: 140 }}
            >
              В корзину
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getProductIds().map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
      generatedAt: formatDateTime(),
    },
  };
}
