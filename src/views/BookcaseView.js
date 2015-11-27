import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
import { BookcaseList }       from 'components/BookcaseList';

import 'styles/bookcase.scss';

const mapStateToProps = (state) => ({
  counter : state.counter,
  routerState : state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(counterActions, dispatch)
});

export class BookcaseView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    counter  : React.PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = { bookcases: [] };
  }

  componentWillMount() {
    // get all bookcases
    fetch('http://localhost:3001/v1/bookcases')
      .then(r => r.json())
      .then(json => this.setState({bookcases: json}));
  }

  render () {
    return (
      <div className='container'>
        <h1>Книжные полки</h1>
        <button className="btn">Добавить полку</button>
        {this.state.bookcases.some(bookcase => bookcase.group === 'work')
          ? <BookcaseList bookcases={this.state.bookcases} group='work' />
          : null
        }
        {this.state.bookcases.some(bookcase => bookcase.group === 'edition')
          ? <BookcaseList bookcases={this.state.bookcases} group='edition' />
          : null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookcaseView);
