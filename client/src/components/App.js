import React, { Component } from 'react';
import { actionTypes } from '../action';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
    this.handleDeductBtnClick = this.handleDeductBtnClick.bind(this);
  }

  handleAddBtnClick() {
    const { dispatch } = this.props;
    const action = {
      type: actionTypes.ADD,
      number: this.props.number
    };
    dispatch(action);
  }

  handleDeductBtnClick() {
    const { dispatch } = this.props;
    const action = {
      type: actionTypes.DEDUCT,
      number: this.props.number
    };
    dispatch(action);
  }  

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <button onClick={this.handleAddBtnClick}>
          Add 1
        </button>
        <button onClick={this.handleDeductBtnClick}>
          Deduct 1
        </button>        
        <p>{ this.props.number }</p>
      </header>
    </div>      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
};

export default connect(mapStateToProps)(App);

