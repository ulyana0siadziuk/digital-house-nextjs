import Head from "next/head";
import { Col, Row } from "react-bootstrap";
import ProductCard from "@/components/ProductCard/ProductCard.jsx";
import RenderInfo from "@/components/RenderInfo/RenderInfo.jsx";
import { formatDateTime, getProducts } from "@/data/products.js";

export default function ProductsPage({ products, generatedAt }) {
  return (
    <>
      <Head>
        <title>Каталог товаров — Digital House</title>
        <meta
          name="description"
          content="Актуальные цены и наличие цифровых товаров Digital House."
        />
      </Head>
      <h1 className="mb-3">Каталог товаров</h1>
      <RenderInfo
        mode="SSR"
        generatedAt={generatedAt}
        extra="Время меняется при каждом обновлении страницы: HTML собирается на сервере заново."
      />
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} lg={3} className="d-flex">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export async function getServerSideProps() {
  const products = getProducts();

  return {
    props: {
      products,
      generatedAt: formatDateTime(),
    },
  };
}
