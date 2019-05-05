import React, { Component } from 'react';
import './index.less';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src="/assets/iron.jpg" alt="" />
        <p>欢迎 Iron Man</p>
      </div>
    );
  }
}
