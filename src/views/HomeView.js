import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions as counterActions } from '../redux/modules/counter';
import './HomeView.scss';

import { LoginForm } from 'components/LoginForm';

const mapStateToProps = (state) => ({
  counter: state.counter
});

export class HomeView extends Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:&nbsp;
          <span className='counter'>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default'
                onClick={() => this.props.increment(1)}>
          Increment
        </button>
        <button className='btn btn-default' onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
        <br />
        <Link to='/bookcases'>View Bookcase</Link>
        <br />
        <LoginForm />
      </div>
    );
  }
}

HomeView.propTypes = {
  counter: PropTypes.number.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, counterActions)(HomeView);
