import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import { BookcaseList } from 'components/BookcaseList';
import { BookcaseAddWindow } from 'components/BookcaseAddWindow';
import { Button } from 'react-bootstrap';
import 'views/BookcaseView.scss';

const mapStateToProps = (state) => ({
  bookcases: state.bookcases
});

export class BookcaseView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userId: 1
    };
  }

  componentWillMount () {
    this.props.loadBookcaseListAsync(this.state.userId);
  }

  onOpenBookcaseViewPage (bookcaseId) {
    this.props.openBookcaseViewPage(bookcaseId);
  }

  onAddBookcaseOpenClick (e) {
    this.setState({ selectedBookcase: undefined, showBookcaseAddWindow: true });
  }

  onEditBookcaseOpenClick (bookcase_id) {
    let selectedBookcase = this.props.bookcases.filter(elem => elem.bookcase_id === bookcase_id)[0];
    this.setState({ selectedBookcase: selectedBookcase, showBookcaseAddWindow: true });
  }

  onAddBookcaseCloseClick (e) {
    this.setState({ showBookcaseAddWindow: false });
  }

  render () {
    return <div className="container">
        <h1>Книжные полки</h1>

        <Button bsStyle="primary" onClick={this.onAddBookcaseOpenClick.bind(this)}>Добавить полку</Button>

        <BookcaseAddWindow
            show={this.state.showBookcaseAddWindow}
            onHide={this.onAddBookcaseCloseClick.bind(this)}
            selectedBookcase={this.state.selectedBookcase}
            addBookcaseAsync={this.props.addBookcaseAsync}
            editBookcaseAsync={this.props.editBookcaseAsync} />

        {this.props.bookcases.some(bookcase => bookcase.group === 'work')
          ? <BookcaseList
                bookcases={this.props.bookcases}
                group="work"
                onViewClick={this.onOpenBookcaseViewPage.bind(this)}
                onEditClick={this.onEditBookcaseOpenClick.bind(this)}
                onDeleteClick={this.props.deleteBookcaseAsync} />
          : null
        }
        {this.props.bookcases.some(bookcase => bookcase.group === 'edition')
          ? <BookcaseList
                bookcases={this.props.bookcases}
                group="edition"
                onViewClick={this.onOpenBookcaseViewPage.bind(this)}
                onEditClick={this.onEditBookcaseOpenClick.bind(this)}
                onDeleteClick={this.props.deleteBookcaseAsync} />
          : null
        }
      </div>;
  }
}

BookcaseView.propTypes = {
  bookcases: PropTypes.array,
  loadBookcaseListAsync: PropTypes.func.isRequired,
  addBookcaseAsync: PropTypes.func.isRequired,
  editBookcaseAsync: PropTypes.func.isRequired,
  deleteBookcaseAsync: PropTypes.func.isRequired,
  openBookcaseViewPage: PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(BookcaseView);
