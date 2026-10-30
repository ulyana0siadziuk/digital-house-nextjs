import Link from "next/link";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="white" className="border-bottom py-3" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          href="/"
          className="d-flex align-items-center gap-3 mb-0"
        >
          <img src="/logo.png" alt="Digital House" width={56} height={56} />
          <div>
            <div className="fs-4 fw-bold lh-1">Digital House</div>
            <div className="text-secondary small d-none d-md-block">
              Интернет-магазин цифровых товаров для дома
            </div>
          </div>
        </Navbar.Brand>
        <Nav className="ms-4 me-auto gap-2">
          <Nav.Link as={Link} href="/">
            Главная
          </Nav.Link>
          <Nav.Link as={Link} href="/products">
            Каталог
          </Nav.Link>
        </Nav>
        <div className="d-flex gap-2">
          <Button variant="link" className="p-2" aria-label="Поиск">
            <img src="/icons/search.svg" alt="" width={22} height={22} />
          </Button>
          <Button variant="link" className="p-2" aria-label="Профиль">
            <img src="/icons/user.svg" alt="" width={22} height={22} />
          </Button>
          <Button variant="link" className="p-2" aria-label="Корзина">
            <img src="/icons/cart-header.svg" alt="" width={22} height={22} />
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
