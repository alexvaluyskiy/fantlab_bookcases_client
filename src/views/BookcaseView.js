import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import bookcaseActions        from 'actions/bookcase';
import { BookcaseList }       from 'components/BookcaseList';
import { Link } from 'react-router';

import 'styles/bookcase.scss';

const mapStateToProps = (state) => ({
  bookcases: state.bookcases,
  routerState: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(bookcaseActions, dispatch)
});

export class BookcaseView extends Component {
  render () {
    let bookcaseName;

    console.log(this.props);
    return (
      <div className='container'>
        <h1>Книжные полки</h1>
        <input ref={node => { bookcaseName = node; }} />
        <button className="btn" onClick={() => {
          this.props.actions.add_bookcase({
            bookcase_id: 100,
            name: bookcaseName.value,
            type: 'work'
          })
        }}>
          Добавить полку
        </button>


        {this.props.bookcases.some(bookcase => bookcase.group === 'work')
          ? <BookcaseList bookcases={this.props.bookcases} group='work' onDeleteClick={this.props.actions.remove_bookcase} />
          : null
        }
        {this.props.bookcases.some(bookcase => bookcase.group === 'work')
          ? <BookcaseList bookcases={this.props.bookcases} group='edition' onDeleteClick={this.props.actions.remove_bookcase} />
          : null
        }

        <h2>Другие полки</h2>
        <ul>
        {this.props.bookcases.sort((a, b) => a.order > b.order).map(bookcase =>
          <li key={bookcase.bookcase_id} className={`bookcase_item ${bookcase.type}`}>
            <Link to={`/bookcases/${bookcase.bookcase_id}`}>{bookcase.name}</Link>
            <span className="description"> ({bookcase.description})</span>
            <span className="order"> (#{bookcase.order})</span>
            <span className="bookcount"> (книг: {bookcase.bookcount})</span>
            <div>
              <button className="btn btn-sm" onClick={() => {
                this.props.actions.remove_bookcase(bookcase.bookcase_id);
              }}>Удалить полку</button>
            </div>
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookcaseView);
