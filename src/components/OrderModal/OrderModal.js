import './OrderModal.css';

import { Alert, Button, Form, Modal } from "react-bootstrap";

import { Link } from "react-router-dom";

const OrderModal = ({ showModal, onClose, onBuy, orderId}) => {

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Completa los datos para terminar!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ej: email@email.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control type="text" placeholder="Ej: Carlos Sosa" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="Por Ej: 11xxxxxxxx" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {!orderId && (
          <>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={onBuy}>
              Comprar Ahora
            </Button>
          </>
        )}
        {orderId && (
          <div className='footerOrderSuccess'>
            <Alert key='success' variant='success'>
              Id de pedido: {orderId}
            </Alert>
            <Link to='/'>
              <Button variant="success">
                Comprar nuevamente
              </Button>
            </Link>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}
 
export default OrderModal;