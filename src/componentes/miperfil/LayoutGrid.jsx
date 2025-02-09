import "./LayoutGrid.css";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const LayoutGrid = () => {
  return (
    <Container fluid>
      <Row>
        {/* Columna izquierda (más pequeña) */}
        <Col md={3} className="left-column bg-dark">
        
        <p>hola</p>
        </Col>

        {/* Columna derecha (más grande) */}
        <Col md={9} className="right-column">
        
        <div id="contenerTextoTitulo">
        <div id="fondoTextoTitulo">
          <p id="titulo">MIS COMPRAS</p>
        </div>
      </div>
      <div id="contenerTextoTitulo">
        <div id="fondoTextoTitulo">
          <p id="titulo">COLABORAR</p>
        </div>
      </div>

        </Col>
      </Row>
    </Container>
  );
};

export default LayoutGrid;