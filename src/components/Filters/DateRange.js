import React, { Component } from 'react'
import {connect} from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import {changeDateRange} from '../../AC/index'

class DateRange extends Component {
    handleDayClick = (day) => {
        this.props.changeDateRange(day)
    }

    render() {
        const { from, to } = this.props.range;
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                <span>from {from ? from.toDateString() : '.....'} to {to ? to.toDateString() : '.....'}</span>
            </div>
        );
    }

}


export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange })(DateRange)
