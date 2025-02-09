import "./Registro.css";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const Registro = () => {
  return (
    <Form id="formularioRegistro">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="name" placeholder="Nombre completo" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="phone" placeholder="+5696842XXX" />
        </Form.Group>
      </Row>
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

      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridDireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control placeholder="Guayaquil 527 departamento 20" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCiudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control placeholder="Arica" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridComuna">
          <Form.Label>Comuna</Form.Label>
          <Form.Control placeholder="Providencia" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="Acepto el almacenamiento de mis datos"
        />
      </Form.Group>

      <Button id="botonRegistro" variant="primary" type="submit">
        Crear cuenta
      </Button>
    </Form>
  );
};

export default Registro;
