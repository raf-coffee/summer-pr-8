import { Col, Container, Row, Image, Button } from "react-bootstrap";

export function Feedback() {
  return (
    <Container>
      <h2 className="text-center text-md-start fs-4 my-3">
        Отзывы<span className="d-none d-md-inline">:</span>
      </h2>
      <div className="border-bottom border-secondary-subtle mb-4">
        <Row>
          <Col xs={3} md={2}>
            <Image src="/feed1.png" className="mx-md-auto d-md-block" />
          </Col>
          <Col xs={9} md={10}>
            <p className="mb-1">Валерия Антонова</p>
            <p className="mb-1 fs-md-6">Арт-директор</p>
            <div>
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
            </div>
          </Col>
          <Col xs={12} md={{ span: "auto", offset: 2 }} className="mt-2">
            <p className="text-secondary">
              <Image src="/check.svg" className="me-2" />
              Супер! Я бы заказала съемку снова!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 2 }} className="my-2">
            <p className="text-balance">
              Хотим выразить огромную благодарность вашей компании! Получили
              море ощущений, все прошло просто замечательно. Фотки получились
              великолепные, отдельное спасибо фотографу!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: "auto", offset: 2 }}>
            <p className="text-secondary">27 Апреля, 2019г.</p>
          </Col>
        </Row>
      </div>
      <div className="border-bottom border-secondary-subtle mb-4">
        <Row>
          <Col xs={3} md={2}>
            <Image src="/feed2.png" className="mx-md-auto d-md-block" />
          </Col>
          <Col xs={9} md={10}>
            <p className="mb-1">Виталий Петров</p>
            <p className="mb-1">Фотограф</p>
            <div>
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
            </div>
          </Col>
          <Col xs={12} md={{ span: "auto", offset: 2 }} className="mt-2">
            <p className="text-secondary">
              <Image src="/check.svg" className="me-2" />
              Супер! Я бы заказала съемку снова!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 2 }} className="my-2">
            <p className="text-balance">
              Восторг! :) Очень понравилось :) Захватили последний теплый,
              солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет,
              полёт, приземление. Организация полёта отличная. Спасибо!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: "auto", offset: 2 }}>
            <p className="text-secondary">19 Апреля, 2019г.</p>
          </Col>
        </Row>
      </div>
      <Button
        variant="link"
        className="w-75 text-balance d-flex justify-content-center align-items-center mx-auto mb-4"
      >
        Показать все (134)
        <Image src="/chevron-right.svg" className="ms-1" />
      </Button>
    </Container>
  );
}
