import { Modal, Button, Form, InputGroup, Col } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  size?: "sm" | "lg" | "xl";
  centered?: boolean;
  backdrop?: true | false | "static";
}

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  phone: string;
  cardNumber: string;
  cvv: string;
  period: string;
  confirmation: boolean;
};

export function AppModal({
  show,
  onHide,
  backdrop,
  size,
  centered,
}: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = () => onHide();

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop={backdrop}
      size={size}
      centered={centered}
    >
      <Modal.Header closeButton>
        <Modal.Title className="mx-auto">
          <h2 className=" d-block mb-0 fs-4">Бронирование</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="modalForm"
          className="p-5 pb-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>
              Дата<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="date"
              className="rounded-0"
              {...register("date", {
                required: true,
              })}
              aria-invalid={errors.date ? "true" : "false"}
              isInvalid={!!errors.date}
            />
            <Form.Control.Feedback type="invalid" id="dateError">
              Выберите дату.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>
              Email<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Электронная почта"
              className="rounded-0"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
              })}
              aria-invalid={errors.email ? "true" : "false"}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid" id="EmailError">
              Введите корректный email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>
              Имя<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя"
              className="rounded-0"
              {...register("firstName", {
                required: true,
                maxLength: 30,
                pattern: /[\p{Letter}\p{Mark}\s-]+/gu,
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid" id="firstNameError">
              Имя содержит недопустимые символы.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>
              Фамилия<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите фамилию"
              className="rounded-0"
              {...register("lastName", {
                required: true,
                maxLength: 30,
                pattern: /[\p{Letter}\p{Mark}\s-]+/gu,
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid" id="lastNameError">
              Фамилия содержит недопустимые символы.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>
              Телефон<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="+7(905) 123-45-67"
              className="rounded-0"
              {...register("phone", {
                required: true,
                maxLength: 30,
                pattern:
                  /((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/,
              })}
              aria-invalid={errors.phone ? "true" : "false"}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid" id="phoneError">
              Введите корректный номер телефона.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="card">
            <Form.Label>
              Данные карты<span className="text-danger">*</span>
            </Form.Label>
            <InputGroup>
              <Col xs={12}>
                <Form.Control
                  type="text"
                  aria-label="Номер карты"
                  placeholder="Номер карты"
                  className="rounded-0"
                  {...register("cardNumber", {
                    required: true,
                  })}
                  aria-invalid={errors.cardNumber ? "true" : "false"}
                  isInvalid={!!errors.cardNumber}
                />
              </Col>

              <Col>
                <Form.Control
                  type="text"
                  aria-label="Срок действия"
                  placeholder="Срок действия"
                  className="rounded-0 border-top-0"
                  {...register("period", {
                    required: true,
                  })}
                  aria-invalid={errors.period ? "true" : "false"}
                  isInvalid={!!errors.period}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  aria-lable="CVV"
                  placeholder="CVV"
                  className="rounded-0 border-top-0"
                  {...register("cvv", {
                    required: true,
                  })}
                  aria-invalid={errors.cvv ? "true" : "false"}
                  isInvalid={!!errors.cvv}
                />
              </Col>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmation">
            <Form.Check
              type="checkbox"
              label="Я согласен с пользовательским соглашением и публичной офертой"
              className="btn-success"
              {...register("confirmation", {
                required: true,
              })}
              aria-invalid={errors.confirmation ? "true" : "false"}
              isInvalid={!!errors.confirmation}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          form="modalForm"
          type="submit"
          size="lg"
          className="w-50 mx-auto d-block fw-bold bg-warning border-0 py-4 my-4"
        >
          Забронировать
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
