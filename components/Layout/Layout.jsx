import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function Layout({ children }) {
  return (
    <div className="pb-5">
      <Header />
      <Container className="pt-4">{children}</Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
