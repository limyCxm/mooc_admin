import React, { Component } from 'react';
import './index.less';
import axios from 'axios';
import '../../testList';
export default class Home extends Component {
  componentWillMount() {
    axios.get('/test/data', { dataType: 'json' }).then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div className="home">
        <img src="/assets/iron.jpg" alt="" />
        <p>欢迎 Iron Man</p>
      </div>
    );
  }
}
