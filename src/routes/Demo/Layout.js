import React from "react";
import PropTypes from 'prop-types';
import { Layout, Breadcrumb, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import styles from './style.less';

class AlphaLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <h1> layout 2</h1>
                    <Layout>
                        <Sider style={{ 'color': '#fff' }}>
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className={styles.menu_a}>
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>

                        </Sider>
                        <Layout>
                            <Header style={{ 'color': '#fff' }}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Header>
                            <Content style={{ 'padding': '50px' }}>
                                <Breadcrumb>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>List</Breadcrumb.Item>
                                    <Breadcrumb.Item>App</Breadcrumb.Item>
                                </Breadcrumb>
                            </Content>
                            <Footer style={{ 'text-align': 'center', 'border-top': '1px solid #ddd' }}>Footer</Footer>
                        </Layout>
                    </Layout>
                </div>
            </div>

        );
    }
}

export default AlphaLayout;