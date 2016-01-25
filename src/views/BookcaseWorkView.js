import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';

const mapStateToProps = (state) => ({
  bookcaseWorks: state.bookcaseWorks,
  bookcases: state.bookcases
});

export class BookcaseWorkView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userId: 1
    };
  }

  componentWillMount () {
    if (this.props.bookcases.length === 0) {
      this.props.loadBookcaseListAsync(this.state.userId);
    }
    this.props.loadBookcaseWorksAsync(this.props.routeParams.bookcaseId);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.bookcases.length > 0) {
      let bookcase = nextProps.bookcases.filter(elem => elem.bookcase_id == this.props.routeParams.bookcaseId)[0];
      this.setState({ bookcase_name: bookcase.name });
    }
  }

  render () {
    return <div className="container">
        <h1>Книжная полка: {this.state.bookcase_name}</h1>
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
  routeParams: PropTypes.object,
  bookcases: PropTypes.array,
  bookcaseWorks: PropTypes.array,
  loadBookcaseListAsync: PropTypes.func.isRequired,
  loadBookcaseWorksAsync: PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(BookcaseWorkView);
