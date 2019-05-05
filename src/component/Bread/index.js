import React, { Component } from 'react';

import { Breadcrumb } from 'antd';
import './index.less';
export default class Bread extends Component {
  render() {
    return (
      <div className="bread">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/home">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/home">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
