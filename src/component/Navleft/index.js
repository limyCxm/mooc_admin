import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './index.less';

import menu from '../../resource/menuConfig';

const SubMenu = Menu.SubMenu;
export default class Navleft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNode: null,
    };
  }

  handleClick = e => {};
  componentWillMount() {
    let renderNode = this.renderMenu(menu);
    this.setState({
      menuNode: renderNode,
    });
  }
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type="mail" />
                <span>{item.title}</span>
              </span>
            }>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <Icon type="pie-chart" />
          <span>{item.title}</span>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className="leftContent">
        <div className="titleLogo">
          <img src="/assets/Iron-Man.svg" alt="iron man" />
          <span>Iron Man</span>
        </div>
        <Menu
          onClick={this.handleClick}
          style={{ width: '100%' }}
          mode="vertical"
          theme="dark">
          {this.state.menuNode}
        </Menu>
      </div>
    );
  }
}
