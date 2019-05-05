import React, { Component } from 'react';
import { Row, Col, Badge } from 'antd';
import './index.less';
export default class Header extends Component {
  render() {
    return (
      <div className="headerContent">
        <Row className="header_tips">
          <Col span={20} />
          <Col span={4}>
            <Badge count={5}>Message</Badge>
            <img src="/assets/Iron-Man.svg" alt="" />
          </Col>
        </Row>
      </div>
    );
  }
}
