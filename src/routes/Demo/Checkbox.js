import React from "react";
import PropTypes from 'prop-types';
import { Checkbox,Row,Col } from 'antd';

import styles from './style.less';
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

class AlphaCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1> Checkbox</h1>
                <Checkbox onChange={onChange}>Checkbox</Checkbox>
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange} defaultValue={['A']}>
                    <Row>
                        <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                        <Col span={8}><Checkbox value="B">B</Checkbox></Col>
                        <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                        <Col span={8}><Checkbox value="D" checked={true}>D</Checkbox></Col>
                        <Col span={8}><Checkbox value="E" disabled>E</Checkbox></Col>
                    </Row>
                </Checkbox.Group>
            </div>

        );
    }
}

export default AlphaCheckbox;