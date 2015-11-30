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

    return <div className='container'>
        <h1>Книжные полки</h1>
        <input ref={node => { bookcaseName = node; }} />
        <button className="btn" onClick={() => {
          this.props.actions.add_bookcase({
            bookcase_id: 100,
            name: bookcaseName.value,
            group: 'work'
          })
        }}>
          Добавить полку
        </button>

        {this.props.bookcases.some(bookcase => bookcase.group === 'work')
          ? <BookcaseList bookcases={this.props.bookcases} group='work' onDeleteClick={this.props.actions.remove_bookcase} />
          : null
        }
        {this.props.bookcases.some(bookcase => bookcase.group === 'edition')
          ? <BookcaseList bookcases={this.props.bookcases} group='edition' onDeleteClick={this.props.actions.remove_bookcase} />
          : null
        }
      </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookcaseView);
