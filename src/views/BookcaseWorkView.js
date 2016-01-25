import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as bookcaseWorkActions } from '../redux/modules/bookcaseWork';

const mapStateToProps = (state) => ({
  bookcaseWorks: state.bookcaseWorks,
  bookcases: state.bookcases
});

export class BookcaseWorkView extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    let bookcaseId = this.props.routeParams.bookcaseId;
    this.props.loadBookcaseListAsync(bookcaseId);
  }

  render () {
    return <div className='container'>
        <h1>Книжная полка: !NAME!</h1>
        {this.props.bookcaseWorks.map(bookcaseWork =>
          <ul key={bookcaseWork.bookcase_work_id}>
            <li>Work Id: {bookcaseWork.work.work_id}</li>
            <li>Name: {bookcaseWork.work.name}</li>
            <li>Rus Name: {bookcaseWork.work.rus_name}</li>
            <li>Year: {bookcaseWork.work.year}</li>
            <li>Rating: {bookcaseWork.work.rating}</li>
            <li>Marks Count: {bookcaseWork.work.marks_count}</li>
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
