import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AppModal } from "../Modal/Modal";

export function Hero() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="bg-hero-image d-flex flex-column justify-content-center">
      <Container className="py-4">
        <Row>
          <Col xs={9} md={12}>
            <p className="font-xl text-white mb-4 text-balance fw-bold">
              Эксклюзивная <span className="text-warning">фотосессия</span> при
              полете на вертолете
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col
            xs={4}
            sm={3}
            md={2}
            className="bg-warning text-white ms-2 pt-2 pe-lg-0 rounded-start"
          >
            <p className="mb-0">Стоимость:</p>
            <p className="fs-1 fw-bold">1500&#8381;</p>
          </Col>
          <Col
            xs={3}
            md={2}
            lg={1}
            className="bg-warning rounded-end d-flex align-items-center justify-content-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-percentage border border-2 border-white rounded-circle text-white"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M6 18l12 -12" />
            </svg>
          </Col>
        </Row>
        <div className="d-grid d-md-inline-block gap-2">
          <Button
            size="lg"
            className="border border-4 border-white rounded bg-transparent fw-bold py-4"
            onClick={handleOpen}
          >
            Забронировать место
          </Button>
          <AppModal
            show={open}
            onHide={handleClose}
            backdrop="static"
            size="lg"
            centered
          />
        </div>
      </Container>
    </div>
  );
}
