import { Button, Col, Container, Row, Image } from "react-bootstrap";

export function Time() {
  return (
    <Container>
      <div className="m-2 p-2">
        <h2 className="mb-4 text-center text-md-start">
          Доступная съемка
          <br />в ближайшее время<span className="d-none d-md-inline">:</span>
        </h2>
        <Row>
          <Col lg={6} className="px-0">
            <p className="text-center text-md-start mb-0 fs-4 border p-2">
              Пятница, 14 сентября
              <Image
                src="/calendar.svg"
                className="d-none d-md-inline-block mb-1 ms-2"
              />
            </p>
          </Col>
        </Row>
        <Row className="flex-column flex-md-row">
          <Col md={12} lg={6}>
            <Row className="border border-bottom-0 py-4">
              <Col md={6} lg={6}>
                <p className="mb-1">15:00 - 18:00</p>
                <p className="fw-bold mb-1">850$</p>
                <p>Осталось - 1 место</p>
              </Col>
              <Col
                md={6}
                lg={6}
                className="d-md-flex align-items-md-center justify-content-md-end"
              >
                <Button
                  variant="outline-warning"
                  className="border-2 px-5 py-3 rounded-1"
                >
                  Выбрать
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="flex-column flex-md-row">
          <Col md={12} lg={6}>
            <Row className="border py-4">
              <Col md={6} lg={6}>
                <p className="mb-1">15:00 - 18:00</p>
                <p className="fw-bold mb-1">850$</p>
                <p>Осталось - 1 место</p>
              </Col>
              <Col
                md={6}
                lg={6}
                className="d-md-flex align-items-md-center justify-content-md-end"
              >
                <Button
                  variant="outline-warning"
                  className="border-2 px-5 py-3 rounded-1"
                >
                  Выбрать
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="py-4">
          <Col xs={2} md={"auto"}>
            <img src="trophy.svg" />
          </Col>
          <Col
            xs={10}
            md={"auto"}
            className="d-md-flex align-items-md-center gap-md-2"
          >
            <p className="mb-2 mb-md-0">Более 150 отзывов с оценкой</p>
            <div className="mb-md-1">
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
