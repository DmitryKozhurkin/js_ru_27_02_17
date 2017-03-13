import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Chart from './Chart'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

//компонент становится слишком большим, пора разбивать на более мелкие
class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        text: '',
        selectedArticle: null,
        dayFrom: null,
        dayTo: null,
    }

    render() {
        const { selectedArticle, dayFrom, dayTo } = this.state
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                <Select options = {options} value={selectedArticle} onChange = {this.handleSelectChange} multi/>
                <p><a href="#" onClick={this.handleResetClick}>Reset</a></p>
                <p>{ dayFrom && dayTo && <span>You chose from { '' + dayFrom } to { '' + dayTo } </span> }</p>
                <DayPicker numberOfMonths={ 2 } selectedDays={ [dayFrom, { from: dayFrom, to: dayTo }] } onDayClick={ this.handleDayClick }/>
                <ArticleList articles={this.props.articles}/>
                <Chart articles={this.props.articles}/>
            </div>
        )
    }

    handleSelectChange = selected => {
        this.setState({ selected })
    }

    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            dayFrom: null,
            dayTo: null,
        });
    }

    handleDayClick = (day) => {
        const { dayFrom, dayTo } = this.state
        const range = DateUtils.addDayToRange(day, { from: dayFrom, to: dayTo });
        console.log(range);
        this.setState({
            ...this.state,
            dayFrom: range.from || null,
            dayTo: range.to || null
        })
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }
}

export default App
