import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './admin.less';

export default class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          slider
        </Col>
        <Col span={20} className="main">
          header
          <Row className="content">content</Row>
          footer
        </Col>
      </Row>
    );
  }
}
