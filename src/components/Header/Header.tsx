import { Col, Container, Row } from "react-bootstrap";

export function Header() {
  return (
    <Container>
      <Row className="py-4">
        <Col className="d-flex align-items-center">
          <h1 className="mb-0 text-uppercase">Helyfly</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <a href="">Москва</a>
        </Col>
        <Col className="d-flex align-items-center justify-content-end ">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user text-secondary"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </a>
        </Col>
      </Row>
    </Container>
  );
}