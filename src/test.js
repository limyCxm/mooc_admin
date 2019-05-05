import React, { Component } from 'react';

import './test.less';

import { Button } from 'antd';
export default class Test extends Component {
  render() {
    return (
      <div className="test">
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}
