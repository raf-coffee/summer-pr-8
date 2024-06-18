import { Button, Col, Container, Image, Row } from "react-bootstrap";

export function MeetingPointDesktop() {
  return (
    <Container className="d-none d-lg-block">
      <div className="position-absolute bg-white mt-4 p-4 border">
        <Row className="mb-2">
          <Col lg={3} className="pe-0">
            <Image src="point1.png" className="d-block mx-auto" />
          </Col>
          <Col
            lg={8}
            className="ps-0 d-flex flex-column justify-content-center"
          >
            <p className="mb-1">Где встречаемся?</p>
            <p className="mb-0">Москва</p>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg={3} className="pe-0">
            <Image src="point2.png" className="d-block mx-auto" />
          </Col>
          <Col
            lg={8}
            className="ps-0 d-flex flex-column justify-content-center"
          >
            <p className="mb-1">Время съемки</p>
            <p className="mb-0">3 часа</p>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg={3} className="pe-0">
            <Image src="point3.png" className="d-block mx-auto" />
          </Col>
          <Col
            lg={8}
            className="ps-0 d-flex flex-column justify-content-center"
          >
            <p className="mb-1">Мест осталось:</p>
            <p className="mb-0">2 места</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={3} className="pe-0">
            <Image src={"author.png"} className="small-image d-block mx-auto" />
          </Col>
          <Col className="ps-0">
            <p className="mb-0">Мария Иванова</p>
            <p className="mb-0">Фотограф</p>
            <Button variant="link" size="sm" className="text-start p-0">
              Показать больше информации о фотографе
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
