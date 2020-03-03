import React, { useContext } from 'react';

import { CalendarContext } from '../controller/context';
import { INTERVAL, ViewIntervalComponentProps } from '../types/type';
import DayView from './interval/day';
import WeekView from './interval/week';
import MonthView from './interval/month';
import YearView from './interval/year';

const ViewComponents: Record<INTERVAL, React.ComponentType<ViewIntervalComponentProps>> = {
    [INTERVAL.DAY]: DayView,
    [INTERVAL.WEEK]: WeekView,
    [INTERVAL.MONTH]: MonthView,
    [INTERVAL.YEAR]: YearView,
};

const Main: React.FC = () => {
    const { grid, interval, yearGrid, events, userSelectedDate, handleAddEvent, handleSelectedDate } = useContext(
        CalendarContext
    );
    const RenderComponent = ViewComponents[interval];
    return (
        <div className="main">
            <RenderComponent 
                interval={interval}
                grid={grid}
                yearGrid={yearGrid}
                events={events}
                userSelectedDate={userSelectedDate}
                handleAddEvent={handleAddEvent}
                handleSelectedDate={handleSelectedDate}
            />
        </div>
    );
};

export default Main;
