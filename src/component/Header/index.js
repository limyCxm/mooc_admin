import React, { Component } from 'react';
import { Row, Col, Badge } from 'antd';
import './index.less';
export default class Header extends Component {
  render() {
    return (
      <div className="headerContent">
        <Row className="header_tips">
          <Col span={24}>
            <img src="/assets/Iron-Man.svg" alt="" />
            <Badge count={5}>Message</Badge>
          </Col>
        </Row>
      </div>
    );
  }
}
