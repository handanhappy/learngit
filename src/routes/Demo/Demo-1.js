import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import styles from './style.less';

class AlphaButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Button <span className="subtitle">按钮</span></h1>
        <Row type="flex" justify="start">
          <Col span={6}>
            <Button type="primary" style={{ 'marginRight': '8px', 'marginBottom': '12px' }}>Primary</Button>
          </Col>
          <Col span={6}><Button style={{ 'marginRight': '8px', 'marginBottom': '12px' }}>Default</Button></Col>
          <Col span={6}><Button type="dashed" style={{ 'marginRight': '8px', 'marginBottom': '12px' }}>Dashed</Button></Col>
          <Col span={6}><Button type="danger" style={{ 'marginRight': '8px', 'marginBottom': '12px' }}>Danger</Button></Col>
        </Row>

        <Row>
          <Col span={6}>
            <Button type="primary" style={{ 'marginRight': '8px', 'marginBottom': '12px' }}>Primary</Button>
          </Col>
          <Col span={6}><Button style={{ 'marginRight': '8px', 'marginBottom': '12px' }}>Default</Button></Col>
          <Col span={6}><Button type="dashed" style={{ 'marginRight': '8px', 'marginBottom': '12px' }}>Dashed</Button></Col>
          <Col span={6}><Button type="danger" style={{ 'marginRight': '8px', 'marginBottom': '12px' }}>Danger</Button></Col>
        </Row>

      </div>
    );
  }
}

export default AlphaButton;
