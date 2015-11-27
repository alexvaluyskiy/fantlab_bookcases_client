import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import bookcaseActions        from 'actions/bookcase';
import { BookcaseList }       from 'components/BookcaseList';

import 'styles/bookcase.scss';

const mapStateToProps = (state) => ({
  bookcases: state.bookcases,
  routerState: state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(bookcaseActions, dispatch)
});

export class BookcaseView extends Component {
  static propTypes = {
    actions: PropTypes.object,
    bookcases: PropTypes.array
  }

  handleClick(e) {
    let bookcase = {
      name: 'Bovtiuk',
      type: 'work'
    }
    this.props.actions.add_bookcase(bookcase);
  }

  render () {
    return (
      <div className='container'>
        <h1>Книжные полки</h1>
        <button className="btn" onClick={this.handleClick.bind(this)}>Добавить полку</button>
        {this.props.bookcases.some(bookcase => bookcase.group === 'work')
          ? <BookcaseList bookcases={this.props.bookcases} group='work' />
          : null
        }
        {this.props.bookcases.some(bookcase => bookcase.group === 'work')
          ? <BookcaseList bookcases={this.props.bookcases} group='edition' />
          : null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookcaseView);
