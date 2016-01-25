import React from 'react';
import { Modal, Button, Input } from 'react-bootstrap';

export class BookcaseAddWindow extends React.Component {
  constructor (props) {
    super(props);
    this.state = { user_id: 1 };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedBookcase) {
       this.setState({
         bookcase_id: nextProps.selectedBookcase.bookcase_id,
         name: nextProps.selectedBookcase.name,
         description: nextProps.selectedBookcase.description,
         group: nextProps.selectedBookcase.group,
         type: nextProps.selectedBookcase.type,
         is_private: nextProps.selectedBookcase.is_private,
         user_id: nextProps.selectedBookcase.user_id
       });
    }
    else {
      this.setState({
        bookcase_id: undefined,
        name: '',
        description: '',
        group: 'work',
        type: 'read',
        is_private: false,
        user_id: 1
      });
    }
  }

  onNameChange (event) {
    this.setState({ name: event.target.value });
  }

  onDescriptionChange (event) {
    this.setState({ description: event.target.value });
  }

  onGroupChange (event) {
    this.setState({ group: event.target.value });
  }

  onTypeChange (event) {
    this.setState({ type: event.target.value });
  }

  onPrivateChange (event) {
    this.setState({ is_private: event.target.checked });
  }

  onAddClick (event) {
    let bookcase = {
      bookcase_id: this.state.bookcase_id,
      name: this.state.name,
      description: this.state.description,
      group: this.state.group,
      type: this.state.type,
      is_private: this.state.is_private,
      user_id: this.state.user_id
    };

    if (bookcase.bookcase_id > 0) {
      this.props.editBookcaseAsync(bookcase);
    }
    else {
      this.props.addBookcaseAsync(bookcase);
    }

    this.props.onHide();
  }

  render () {
    return <div className='static-modal'>
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить книжную полку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Input type='text' label='Название' value={this.state.name} onChange={this.onNameChange.bind(this)} />
            <Input type='textarea' label='Описание' value={this.state.description} onChange={this.onDescriptionChange.bind(this)} />
            <Input type='select' label='Группа полки' value={this.state.group} onChange={this.onGroupChange.bind(this)}>
              <option value='work'>work</option>
              <option value='edition'>edition</option>
            </Input>
            <Input type='select' label='Тип полки' value={this.state.type} onChange={this.onTypeChange.bind(this)}>
              <option value='default'>work</option>
              <option value='buy'>buy</option>
              <option value='read'>read</option>
              <option value='expect'>expect</option>
              <option value='sell'>sell</option>
            </Input>
            <Input type='checkbox' label='Приватная полка' checked={this.state.is_private ? 'checked' : ''} onChange={this.onPrivateChange.bind(this)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Закрыть</Button>
          <Button onClick={this.onAddClick.bind(this)} bsStyle='primary'>Добавить</Button>
        </Modal.Footer>
      </Modal>
    </div>;
  }
};
