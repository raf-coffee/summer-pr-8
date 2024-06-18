import { Col, Container, Row } from "react-bootstrap";
import styles from "./Description.module.scss";

export function Description() {
  return (
    <Container>
      <div className={styles["desc-container"]}>
        <h2 className={styles["desc-title"]}>Фотосессия в вертолете</h2>
        <div className={styles["desc-video"]}>
          <div>
            <p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JFIpCSmLVhs?si=lrsO1If8XaCWvJsa"
                title="Puppy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: "0 0 0 0",
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              ></iframe>
            </p>
          </div>
        </div>
        <div className="desc-content">
          <p className="mb-4">
            Полет на вертолете это прекрасная возможность получить новые
            ощущения! А наш замечательный фотограф запечатлит лучшие моменты!
          </p>
          <Row className="align-items-center mb-2">
            <Col xs={2} lg={1}>
              <img src="clock.svg" />
            </Col>
            <Col xs={10} className="ps-0 ps-lg-2">
              <p className="mb-0">3 часа съемки</p>
            </Col>
          </Row>
          <Row className="align-items-center mb-2">
            <Col xs={2} lg={1}>
              <img src="messages.svg" className="text-yellow" />
            </Col>
            <Col xs={10} className="ps-0 ps-lg-2">
              <p className="mb-0">Русский</p>
            </Col>
          </Row>
          <Row className="align-items-center mb-2">
            <Col xs={2} lg={1}>
              <img src="coins.svg" className="text-yellow" />
            </Col>
            <Col xs={10} className="ps-0 ps-lg-2">
              <p className="mb-0">от 850$</p>
            </Col>
          </Row>
          <Row className="align-items-center mb-2">
            <Col xs={2} lg={1}>
              <img src="map-pin.svg" className="text-yellow" />
            </Col>
            <Col xs={10} className="ps-0 ps-lg-2">
              <p className="mb-0">Дубаи</p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={2} lg={1}>
              <img src="camera.svg" className="text-yellow" />
            </Col>
            <Col xs={10} className="ps-0 ps-lg-2">
              <p className="mb-0">Более 50 фотографий</p>
            </Col>
          </Row>
        </div>
      </div>
      <Row className="my-4 align-items-center">
        <Col xs={2} md={"auto"}>
          <img src="trophy.svg" />
        </Col>
        <Col xs={10} md={"auto"} className="ps-0 ps-lg-2">
          <p className="mb-2">Более 150 отзывов с оценкой</p>
          <div>
            <img src="/star.svg" alt="" />
            <img src="/star.svg" alt="" />
            <img src="/star.svg" alt="" />
            <img src="/star.svg" alt="" />
            <img src="/star.svg" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
