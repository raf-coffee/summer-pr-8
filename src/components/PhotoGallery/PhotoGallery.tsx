import { Button, Col, Container, Image, Row } from "react-bootstrap";

export function PhotoGallery() {
  return (
    <Container>
      <div className="border-bottom border-secondary-subtle mb-4">
        <Row>
          <Col>
            <h2 className="text-center text-md-start fs-1 mb-4">
              Фотографии пакета<span className="d-none d-md-inline">:</span>
            </h2>
          </Col>
        </Row>
        <Row className="flex flex-nowrap flex-md-wrap gap-md-4 overflow-scroll mb-5 mb-md-0">
          <Col>
            <Image src="/gallery/01.png" className="mx-md-auto d-md-block" />
          </Col>
          <Col>
            <Image src="/gallery/02.png" className="mx-md-auto d-md-block" />
          </Col>
          <Col>
            <Image src="/gallery/06.png" className="mx-md-auto d-md-block" />
          </Col>
          <Col>
            <Image src="/gallery/04.png" className="mx-md-auto d-md-block" />
          </Col>
          <Col>
            <Image src="/gallery/05.png" className="mx-md-auto d-md-block" />
          </Col>
          <Col>
            <Image src="/gallery/03.png" className="mx-md-auto d-md-block" />
          </Col>
          <Col className="d-md-none">
            <Image src="/gallery/08.png" />
          </Col>
          <Col className="d-md-none">
            <Image src="/gallery/06.png" />
          </Col>
        </Row>
        <Button variant="link" className="d-none d-md-block mx-auto mt-4 mb-4">
          <Image src="/arrow.svg" className="me-2" />
          Показать все фото
          <Image src="/arrow.svg" className="ms-2" />
        </Button>
      </div>
    </Container>
  );
}
