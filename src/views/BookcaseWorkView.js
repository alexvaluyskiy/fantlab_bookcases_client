import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as bookcaseWorkActions } from '../redux/modules/bookcaseWork';

const mapStateToProps = (state) => ({
  bookcaseWorks: state.bookcaseWorks
});

export class BookcaseWorkView extends Component {
  constructor (props) {
    super(props);
    this.state = { bookcaseId: 1 };
  }

  componentWillMount () {
    this.props.loadBookcaseListAsync(this.state.bookcaseId);
  }

  render () {
    return <div className='container'>
        <h1>Книжная полка: !NAME!</h1>
        {this.props.bookcaseWorks.map(work =>
          <ul key={work.bookcase_work_id}>
            <li>Name: {work.name}</li>
            <li>Description: {work.description}</li>
            <li>Rating: {work.rating}</li>
          </ul>
        )}
      </div>;
  }
}

BookcaseWorkView.propTypes = {
  bookcaseWorks: PropTypes.array,
  loadBookcaseListAsync: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, bookcaseWorkActions)(BookcaseWorkView);
