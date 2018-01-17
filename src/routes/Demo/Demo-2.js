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
        <h1>Grid <span className="subtitle">栅格</span></h1>
        <Row type="flex" justify="end" className={styles.row_flex}>
          <Col span={4} className={styles.row_col}>col-4</Col>
          <Col span={4} className={styles.row_col}>col-4</Col>
          <Col span={4} className={styles.row_col}>col-4</Col>
          <Col span={4} className={styles.row_col}>col-4</Col>
        </Row>

        <Row type="flex" justify="space-between" className={styles.row_flex}>
          <Col span={4} className={styles.row_col}>col-4</Col>
          <Col span={5} className={styles.row_col}>col-4</Col>
        </Row>

        <Row type="flex" justify="space-around" className={styles.row_flex}>
          <Col className={styles.row_col}>col</Col>
          <Col className={styles.row_col}>col</Col>
          <Col className={styles.row_col}>col</Col>
          <Col className={styles.row_col}>col</Col>
        </Row>

      </div>
    );
  }
}

export default AlphaButton;
