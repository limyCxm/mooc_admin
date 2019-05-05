import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './admin.less';

import Navleft from './component/Navleft';
import Header from './component/Header';
import Bread from './component/Bread';
import Footer from './component/Footer';

export default class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <Navleft />
        </Col>
        <Col span={20} className="main">
          <Header />
          <Bread />
          <Row className="content">{this.props.children}</Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
