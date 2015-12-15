import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as bookcaseActions } from '../redux/modules/bookcase';
import { BookcaseList } from 'components/BookcaseList';
import 'views/BookcaseView.scss';

const mapStateToProps = (state) => ({
  bookcases: state.bookcase
});

export class BookcaseView extends Component {
  constructor(props) {
    super(props)
    this.state = { userId: 1 }
  }

  componentWillMount() {
    this.props.loadBookcasesAsync(this.state.userId);
  }

  onNameChange(e) {
    this.setState({bookcaseName: e.target.value});
  }

  onGroupChange(e) {
    this.setState({bookcaseGroup: e.target.value});
  }

  onTypeChange(e) {
    this.setState({bookcaseType: e.target.value});
  }

  render () {
    let bookcaseName;

    return <div className='container'>
        <h1>Книжные полки</h1>
        <form className='form-inline'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Название' ref={node => { bookcaseName = node; }} />
            <select className="form-control" defaultValue="work" onChange={this.onGroupChange.bind(this)}>
              <option value="work">work</option>
              <option value="edition">edition</option>
            </select>
            <select className="form-control" defaultValue="default" onChange={this.onTypeChange.bind(this)}>
              <option value="default">default</option>
              <option value="buy">buy</option>
              <option value="read">read</option>
              <option value="expect">expect</option>
              <option value="sell">sell</option>
            </select>
          </div>
          <button type='button' className='btn btn-default' onClick={() => {
            this.props.addBookcaseAsync({
              name: bookcaseName.value,
              group: this.state.bookcaseGroup,
              type: this.state.bookcaseType,
              user_id: this.state.userId
            });
          }}>Добавить полку</button>
        </form>

        {this.props.bookcases.some(bookcase => bookcase.group === 'work')
          ? <BookcaseList bookcases={this.props.bookcases} group='work' onDeleteClick={this.props.deleteBookcaseAsync} />
          : null
        }
        {this.props.bookcases.some(bookcase => bookcase.group === 'edition')
          ? <BookcaseList bookcases={this.props.bookcases} group='edition' onDeleteClick={this.props.deleteBookcaseAsync} />
          : null
        }
      </div>;
  }
}

BookcaseView.propTypes = {
  bookcases: PropTypes.array,
  loadBookcasesAsync: PropTypes.func.isRequired,
  addBookcaseAsync: PropTypes.func.isRequired,
  deleteBookcaseAsync: PropTypes.func.isRequired
};

export default connect(mapStateToProps, bookcaseActions)(BookcaseView);
