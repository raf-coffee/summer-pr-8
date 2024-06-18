import { Col, Container, Row, Image, Button } from "react-bootstrap";

export function Footer() {
  return (
    <div className="bg-secondary-subtle">
      <Container as={"footer"}>
        <Row className="mb-4 mt-4 border-bottom pb-4">
          <Col>
            <h2 className="mb-0 text-uppercase">Helyfly</h2>
          </Col>
          <Col className="d-flex justify-content-end">
            <Image src="/brand-vk.svg" className="me-2 h-75" />
            <Image src="/brand-facebook.svg" className="me-2 h-75" />
            <Image src="/brand-instagram.svg" className="h-75" />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4} className="order-md-1">
            <Image src="/visa.svg" className="me-2" />
            <Image src="/mastercard.svg" className="me-2" />
            <Image src="/paypal.svg" />
          </Col>
          <Col
            xs={6}
            md={4}
            className="d-flex order-md-3 justify-content-end align-items-md-start"
          >
            <Button
              variant="link"
              className="d-flex justify-content-center align-items-center mb-4 mb-md-0 text-secondary"
            >
              RU
              <Image src="/arrow.svg" className="ms-2" />
            </Button>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column order-md-2 align-items-center"
          >
            <p>Тех. поддержка: 8(800)700-00-00</p>
            <p>© 2018 HELYFLY. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
