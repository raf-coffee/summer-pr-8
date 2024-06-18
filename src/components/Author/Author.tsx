import { Button, Col, Container, Image, Row } from "react-bootstrap";

export function Author() {
  return (
    <Container>
      <div className="border-bottom border-secondary-subtle mb-4">
        <Row className="flex-md-row-reverse">
          <Col xs={12} md={6}>
            <Image src="/author.png" className="d-block mx-auto mb-4 mt-md-4" />
            <h2 className="text-center">Марина Иванова</h2>
            <p className="text-center">Фотограф</p>
            <Button
              variant="link"
              className="w-75 text-balance d-block mx-auto mb-4"
            >
              Показать больше информации о фотографе
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <section>
              <h3>Об организаторе:</h3>
              <p>
                Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же
                являюсь членом группы экспертов туристической отрасли, которые
                хорошо разбираются в маркетинге, операциях и услугах
                обслуживания клиентов, специализирующихся на совместном
                использовании и частных турах.
              </p>
              <p>
                Сначала мы (я и моя команда) изучаем интересы клиентов, а затем
                придумываем подходящее решение, которое соответствует бюджету и
                планам клиента. Мы никогда не зависим от субпоставщиков и не
                свяжемся…
              </p>
              <Button
                variant="link"
                className="w-75 text-balance d-block mx-auto mb-4"
              >
                Читать ещё
                <Image src="/arrow.svg" className="ms-2" />
              </Button>
            </section>
            <section>
              <h3>Что я предоставлю:</h3>
              <p>
                Встречу вас на машине после длительного перелёта. Качественный
                подбор места и локации для вашей съемки. При необходимости
                всегда возможно прерваться на обед/ужин. Более 50 фотографий на
                выходе с обработкой и замечательные впечатления о Дубае!
              </p>
              <Button
                variant="link"
                className="w-75 text-balance d-block mx-auto mb-4"
              >
                Читать ещё
                <Image src="/arrow.svg" className="ms-2" />
              </Button>
            </section>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
