import React from "react";
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
  }


import styles from './style.less';
class AlphaCheckbox extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>DatePicker</h1>
                <DatePicker onChange={onChange} />
            </div>

        );
    }
}

export default AlphaCheckbox;