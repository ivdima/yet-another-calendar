import React from 'react';
import DateService from '../service/date-service';
import { defaultCalendarRepresentation, CalendarContext } from './context';
import { CalendarRepresentation, INTERVAL, Event } from '../types/type';

type CalendarProps = {};
type CalendarState = {
    renderContext: CalendarRepresentation;
};

class Calendar extends React.Component<CalendarProps, CalendarState> {
    state: CalendarState = {
        renderContext: defaultCalendarRepresentation,
    };

    dateService = new DateService(new Date());

    prepareData = () => {
        this.dateService.updateGrid();
        this.setState({ 
            renderContext: { 
                ...this.state.renderContext,
                grid: this.dateService.grid,
            }, 
        });
    };

    handleAddEvent = (newEvent: Event) => {

    };

    handleSelectedDate = (userDate: Date) => {

    };

    handleUpdateInterval = (count: number) => {

    };

    handleChangeInterval = (newInterval: INTERVAL) => {
        this.setState({ 
            renderContext: {
                ...this.state.renderContext,
                interval: newInterval,
            }, 
        });
    };

    handleShowWeekends = () => {

    };

    handleToggleCalendarsPanel = () => {
        this.setState({ 
            renderContext: {
                ...this.state.renderContext,
                isOpenCalendarsPanel: !this.state.renderContext.isOpenCalendarsPanel,
            }, 
        });
    };

    componentDidMount () {
        this.prepareData();
    }

    render () {
        const { renderContext } = this.state;
        const contextValues: CalendarRepresentation = {
            ...renderContext,
            handleAddEvent: this.handleAddEvent,
            handleSelectedDate: this.handleSelectedDate,
            handleUpdateInterval: this.handleUpdateInterval,
            handleChangeInterval: this.handleChangeInterval,
            handleShowWeekends: this.handleShowWeekends,
            handleToggleCalendarsPanel: this.handleToggleCalendarsPanel,
        };
        return (
            <CalendarContext.Provider value={contextValues}>
                {this.props.children}
            </CalendarContext.Provider>
        );
    }
}

export default Calendar;