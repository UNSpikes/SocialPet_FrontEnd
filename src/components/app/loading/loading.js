import React from 'react';
import './loading.css';

export class Loading extends React.Component {
  render() {
    return(
      <div className="loading">
        <img src={require("./../../../assets/loading.gif")} width="25%" height="20%"/>
        <h2>Loading...</h2>
      </div>
    );
  }
}