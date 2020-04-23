import React from 'react';
import { connect } from 'react-redux';

import s from './App.module.scss';

class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className={s.app}>
        App
      </div>
    );
  }
};

const mapStateToProps = ({ games, categories }) => ({
  games,
  categories,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch({ type: 'FETCH_GAMES_REQUEST' }),
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
