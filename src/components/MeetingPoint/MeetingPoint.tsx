import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";

export function MeetingPoint() {
  return (
    <Container className="d-lg-none">
      <div className="m-2 p-4 border">
        <Carousel className="carousel-height">
          <Carousel.Item className="h-100">
            <Image
              src="point1.png"
              className="d-block mx-auto carousel-image-height"
            />
            <Carousel.Caption className="carousel-text text-black">
              <h3>Где встречаемся?</h3>
              <p>Москва</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              src="point2.png"
              className="d-block mx-auto carousel-image-height"
            />
            <Carousel.Caption className="carousel-text text-black">
              <h3>Время съемки</h3>
              <p>3 часа</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              src="point3.png"
              className="d-block mx-auto carousel-image-height"
            />
            <Carousel.Caption className="carousel-text text-black">
              <h3>Мест осталось:</h3>
              <p>2 места</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row className="mt-4 justify-content-md-center">
          <Col xs={3} sm={2}>
            <Image src={"author.png"} className="small-image d-block mx-auto" />
          </Col>
          <Col xs={9} sm={7} className="ps-md-0">
            <p className="mb-1">Мария Иванова</p>
            <p className="mb-1">Фотограф</p>
            <Button variant="link" size="sm" className="text-start p-0">
              Показать больше информации о фотографе
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
