import "./Login.css";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Form id="formularioLogin">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Correo" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
      </Row>

      <Button id="botonLogin" variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
  );
};

export default Login;
