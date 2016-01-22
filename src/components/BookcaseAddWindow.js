import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'font-awesome/scss/font-awesome.scss';

export const BookcaseAddWindow = ({
  show,
  onHide
}) => {
  return <div className="static-modal">
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить книжную полку</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form className='form-inline'>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Название' ref={node => { bookcaseName = node; }} />
          <select className='form-control' defaultValue='work'>
            <option value='work'>work</option>
            <option value='edition'>edition</option>
          </select>
          <select className='form-control' defaultValue='default'>
            <option value='default'>default</option>
            <option value='buy'>buy</option>
            <option value='read'>read</option>
            <option value='expect'>expect</option>
            <option value='sell'>sell</option>
          </select>
        </div>
      </form>
      </Modal.Body>

      <Modal.Footer>
        <Button>Закрыть</Button>
        <Button bsStyle="primary">Добавить</Button>
      </Modal.Footer>

    </Modal>
  </div>;
};
