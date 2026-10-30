import Head from "next/head";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Digital House — интернет-магазин цифровых товаров</title>
        <meta
          name="description"
          content="Цифровые книги и гайды для умного дома."
        />
      </Head>
      <section className="py-4">
        <h1 className="display-5 fw-bold mb-4">Digital House</h1>
        <Button as={Link} href="/products" size="lg">
          Перейти в каталог
        </Button>
      </section>
    </>
  );
}
