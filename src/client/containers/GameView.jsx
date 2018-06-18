import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Hand from '../components/Hand.jsx';
import Table from '../components/Table.jsx';
import FooterBar from '../components/FooterBar.jsx';

class GameView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Table />
        <Hand />
        <FooterBar />
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView);